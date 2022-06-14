# List Sections/Groups

This repository implements this Figma design:

https://www.figma.com/file/UuscKQ4Gsp5zkqLjgaQzTf/List-with-grouped-items

I couldn't find a way to make `text-ellipsis` work with `text-orientation` so I
hacked around it using `aspect-ratio` of 1 and `height` of `100%` to get a width
matching the height and using `transform` to rotate the text 90 degress. This
way the text is ellipsised horizontally which works and rotated without the use
of `text-orientation` which would otherwise break the ellipsisation.
