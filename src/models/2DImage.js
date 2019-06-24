export class ImageAnnotation {
	constructor({
		id, name, color, vertices, closed = false, selected = [],
	}) {
		this.id = id;
		this.name = name;
		this.color = color;
		this.vertices = vertices;
		this.closed = closed;
		this.selected = selected;
	}
}
