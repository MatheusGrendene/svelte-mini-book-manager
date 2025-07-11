import { json } from '@sveltejs/kit';
import type { Book } from '$lib/types';
import { randomUUID } from 'crypto';

// eslint-disable-next-line prefer-const
let books: Book[] = [{ id: randomUUID(), title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }];

export async function GET() {
	return json(books);
}

export async function POST({ request }: { request: Request }) {
	const { title, author } = await request.json();
	const newBook: Book = { id: randomUUID(), title, author };
	books.push(newBook);
	// Return the newly created book with its ID
	return json(newBook, { status: 201 });
}

export async function DELETE({ request }: { request: Request }) {
	const { id } = await request.json();
	const bookIndex = books.findIndex((b) => b.id === id);
	if (bookIndex > -1) {
		books.splice(bookIndex, 1);
		return json({ success: true });
	}
	return json({ success: false }, { status: 404 });
}
