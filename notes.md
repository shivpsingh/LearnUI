# SCSS

## Sample code sections

Create variables

```scss
$variable: value
```

Conditions

```scss
@if cond {

} @else if cond {

} @else {

}
```

Looping

```scss
@for $i from 1 through 10 {
    $i
}
```

While Loop

```scss
$x: 1;
while $x < 15 {
    $x: $x + 1
}
```

For Each Loop

```scss
@each $item in black, blue, red {
    .cls-#{$item} {
        background-color: $item;
    }
}
```

Iterate over map

```scss
$map_val: (
    color: red,
    font-size: 15px
);
@each $key, $val in $map_val {

}
```
