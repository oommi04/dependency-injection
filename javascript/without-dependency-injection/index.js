const pi = 3.14

function Rect() {
  this.width = 20
  this.height = 30
}

Rect.prototype.area = function() {
  console.log("area : ", this.width * this.height)
}

Rect.prototype.perim = function() {
  console.log("perim : ", this.width * 2 + this.height * 2)
}

function Circle() {
  this.radius = 20
}

Circle.prototype.area = function() {
  console.log("area : ", this.radius * this.radius * pi)
}

Circle.prototype.perim = function() {
  console.log("perim : ", this.radius * 2 * pi)
}

function GeometryRect() {
  this.dependency = new Rect()
}

GeometryRect.prototype.information = function() {
  this.dependency.perim()
  this.dependency.area()
}

function GeometryCircle() {
  this.dependency = new Circle()
}

GeometryCircle.prototype.information = function() {
  this.dependency.perim()
  this.dependency.area()
}

function MeasureRect() {
  this.g = new GeometryRect()
}

MeasureRect.prototype.show = function() {
  if (this.g) {
    this.g.information()
  }
}

function MeasureCircle() {
  this.g = new GeometryCircle()
}

MeasureCircle.prototype.show = function() {
  if (this.g) {
    this.g.information()
  }
}

const r = new MeasureRect()
r.show()
const c = new MeasureCircle()
c.show()
