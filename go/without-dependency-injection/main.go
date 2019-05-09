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

func measureCircle(g circle) {
	fmt.Println(g.area())
	fmt.Println(g.perim())
}

func measureRect(g rect) {
	fmt.Println(g.area())
	fmt.Println(g.perim())
}

func main() {
	r := rect{20, 30}
	measureRect(r)
	c := circle{20}
	measureCircle(c)
}
