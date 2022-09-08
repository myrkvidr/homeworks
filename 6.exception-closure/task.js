let parseCount = function(value) {
	let quantity = Number.parseInt(value, 10);
	if (Number.isNaN(quantity)) {
		const parseError = new Error("Невалидное значение");
		throw parseError;
	} 
	return quantity;
}

let validateCount = function(value) {
	try {
		let quantity = parseCount(value);
		return quantity;
	} catch(parseError) {
		return parseError;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((this.a + this.b) < this.c || (this.a + this.c < this.b) || (this.b + this.c) < this.a) {
			const triangleError = new Error("Треугольник с такими сторонами не существует");
			throw triangleError;
		}
	}

	getPerimeter() {
		// this.perimeter = perimeter;
		const perimeter = this.a + this.b + this.c;
		return perimeter;
	}

	getArea() {
		let per = this.getPerimeter()
		let halfPerimeter = per / 2;
		let fullArea = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
		let area = +fullArea.toFixed(3);
		return area;
	}
}

let getTriangle = function(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (triangleError) {
		return {
			getArea() {
				return "Ошибка! Треугольник не существует";
			},
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}
