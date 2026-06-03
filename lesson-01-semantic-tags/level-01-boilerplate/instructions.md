# Level 1 — Boilerplate & Document Structure

## Objective

Introduce the semantic HTML document skeleton and where content belongs.

## Benefits (SEO & accessibility)

- Search engines use semantic structure (title, headings, landmarks) to understand page topic and surface relevant snippets — a clear `title` and single `h1` improve discoverability.
- Proper metadata (like `meta[name="viewport"]` and `meta charset`) helps mobile-first indexing and correct rendering, which can affect search ranking and user experience.
- Semantic tags (`header`, `main`, `nav`, `h1`) make the content more machine-readable for crawlers and assistive technologies, improving accessibility and SEO signals.
- Clean document structure makes maintenance, automated testing, and content reuse (e.g., RSS or previews) simpler for developers and tools.

## Complete these tasks

- Fix the HTML document skeleton so it includes a proper `<!doctype html>`, `html`, `head`, `meta` (viewport), and one `title`.
- Ensure content is in `body` and that there is exactly one `h1` describing the page.

## Hints

- What tag informs the browser which HTML version to use?
- Where does a page title appear in the browser UI?

## Tag reference (what to add and why)

- `<!doctype html>`: Purpose: tells the browser to render using HTML5 standards. This is a declaration that appears at the very top of the file before the `<html>` element (no opening/closing tags).
- `<html>`: Purpose: root element of the document that contains all other HTML elements. Has opening and closing tags (`<html>...</html>`) and usually wraps `<head>` and `<body>`.
- `<head>`: Purpose: container for metadata and resources (title, meta tags, links to stylesheets, scripts). Has opening and closing tags (`<head>...</head>`). Content here is not shown as page content.
- `<meta name="viewport" content="width=device-width, initial-scale=1">`: Purpose: ensures responsive layout on mobile devices by controlling viewport scaling. This is a void element (no closing tag); place it inside `<head>`.
- `<title>`: Purpose: defines the page title shown in browser tabs and used by search engines. Has opening and closing tags (`<title>Page title</title>`) and must be placed inside `<head>`.
- `<body>`: Purpose: contains all visible page content (headings, paragraphs, images, etc.). Has opening and closing tags (`<body>...</body>`).
- `<h1>`: Purpose: the top-level heading for the page — there should be exactly one per page in this exercise. Has opening and closing tags (`<h1>Page heading</h1>`). Use `h2`–`h6` for subsections.

## Usage tips

- Order: file starts with `<!doctype html>`, then `<html>`, inside that `<head>` followed by `<body>`.
- Metadata belongs in `<head>` (title, meta, links). Visual content belongs in `<body>`.
- Void elements (like many meta tags) do not have closing tags. Element groups (like `head`, `body`, `html`, `title`, `h1`) require both opening and closing tags.
- Accessibility: use exactly one `<h1>` to give a clear top-level heading for assistive technologies and consistent document outline.

## Example boilerplate

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>VS CODE</title>
  </head>
  <body>
    <h1>Learning to Code</h1>
    <!-- page content -->
  </body>
</html>
```
