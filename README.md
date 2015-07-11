# binary-scale

A (western well tempered) scale implemented with binary numbers.

__IMPORTANT: This is a low-level library. Probably you'll use [music-scale](http://github.com/danigb/music-scale)__

You can see a demo here: http://danigb.github.io/scales

## Usage

Install the module: `npm install binary-scale --save` and use it:

```js
var Scale = require('binary-scale')
var major = Scale(2773)
major.binary // => '101011010101'
major.length // => 7 (7 note scale)
major.steps // => [2, 2, 1, 2, 2, 2, 1] (the distance in semitones between notes)
```

## API: Scale(number)

The method receives an integer and returns an object with the following attributes:

- decimal: the scale decimal equivalent to the binary representation
- binary: a string with the binary representation
- length: the number of notes of this scale
- steps: an array with the distance in semitones between the notes of the scale
- leap: the maximum distance between notes of the scale
- modes: an array of binary strings with all the possible modes of this scale

If the number is below Scale.MIN or bigger than Scale.MAX an exception is thrown.

## Theory and inspiration

`binary-scale` is inspired by the works of [Rich Cochrane](http://cochranemusic.com), [Walter Zettel](http://www.muzuu.org/new_life/pics/simpleblog/scales/scalesadvice.html) and [William Zeitler](http://www.allthescales.org/)


### Binary representations of scales

This is a implementation of binary scales as presented in the awesome book [Arpeggio & Scale Resources](https://archive.org/details/ScaleAndArpeggioResourcesAGuitarEncyclopedia) by Rich Cochrane, chapter 18.

The following explanation is extracted from the book. (The book has a Creative Commons Usage Attribution-Noncommercial-No Derivative Works 3.0... thanks a lot Rich!)

> The major scale is `1 0 1 0 1 1 0 1 0 1 0 1`. This number (2773 in decimal, see previous example) uniquely represents the Major scale. The method of representation is simple: each position, reading left to right, represents a note: 1, b2, 2 and so on. A `1` in that position means the note is included in the scale and a `0` means it is not included. So we have:

```
1   0   1   0   1   1    0   1   0   1   0   1
1  b2   2  b3   3   4   b5   5  b6   6  b7   7
```

### Why 2048 scales?

All the scales have root, so the smallest scale is '100000000000' (2048) and
the biggest is '111111111111' (4095), so the total number is 2048 (4096 - 2048)

Most of they are not interesting enough to be used in music.
For example, in the [allthescales.org site](http://allthescales.org) they limit all the possibilities to those with leap < 5 (1490)

### Scale modes

> Note that modes of a scale are obtained by the technique known as 'bit rotation'. We would normally eliminate all those rows that begin with a zero, since they don't contain a root note:

```
101011010101 // ionian
010110101011
101101010110 // dorian
011010101101
110101011010 // phrygian
101010110101 // lydian
010101101011
101011010110 // mixolydian
010110101101
101101011010 // aeolian
011010110101
110101101010 // locrian
```

## License

MIT License
