package main

import (
	"fmt"
	"math"
)

type rect struct {
	width  float64
	height float64
}

type circle struct {
	radius float64
}

func (r rect) area() float64 {
	return r.width * r.height
}
func (r rect) perim() float64 {
	return 2*r.width + 2*r.height
}

func (c circle) area() float64 {
	return math.Pi * c.radius * c.radius
}
func (c circle) perim() float64 {
	return 2 * math.Pi * c.radius
}

type geometry interface {
	area() float64
	perim() float64
}

func measure(g geometry) {
	fmt.Println(g.area())
	fmt.Println(g.perim())
}

func main() {
	r := rect{20, 30}
	measure(r)
	c := circle{20}
	measure(c)
}
