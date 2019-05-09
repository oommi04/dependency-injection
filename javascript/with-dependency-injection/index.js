const pi = 3.14

function Rect(widht, height) {
  this.width = widht
  this.height = height
}

Rect.prototype.area = function() {
  console.log("area : ", this.width * this.height)
}

Rect.prototype.perim = function() {
  console.log("perim : ", this.width * 2 + this.height * 2)
}

function Circle(radius) {
  this.radius = radius
}

Circle.prototype.area = function() {
  console.log("area : ", this.radius * this.radius * pi)
}

Circle.prototype.perim = function() {
  console.log("perim : ", this.radius * 2 * pi)
}

function Geometry(dependency) {
  this.dependency = dependency
}

Geometry.prototype.information = function() {
  this.dependency.perim()
  this.dependency.area()
}

function Measure(geometry) {
  this.g = geometry
}

Measure.prototype.show = function() {
  if (this.g) {
    this.g.information()
  }
}

const r = new Measure(new Geometry(new Rect(20, 30)))
r.show()
const c = new Measure(new Geometry(new Circle(20)))
c.show()
// Measure(new Rect(20, 30))
// Measure(new Circle(20))
