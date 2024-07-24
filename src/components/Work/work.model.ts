export interface IWork {
	name: string;
	description?: string;
	type?: string;
	year?: string;
	image?: string;
	link?: string;
}

export class WorkModel implements IWork {
	name: string = '';
	description?: string | undefined;
	type?: string | undefined;
	year?: string | undefined;
	image?: string | undefined;
	link?: string | undefined;
}
