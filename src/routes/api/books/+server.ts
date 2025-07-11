import { json } from '@sveltejs/kit';
import type { Book } from '$lib/types';

// eslint-disable-next-line prefer-const
let books: Book[] = [
	{ title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
];

export async function GET() {
	return json(books);
}

export async function POST({ request }: { request: Request }) {
	const { title, author } = await request.json();
	const book: Book = { title, author };
	books.push(book);
	return json(book);
}