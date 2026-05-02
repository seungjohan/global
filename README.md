# Bilingual Resume

Single resume project based on the original `global` project structure, with Korean content added as a second language.

## What changed

- The root project keeps the global Jekyll structure: `_config.yml`, `_data`, `_includes`, `_layouts`, `assets`, and `images`.
- English data stays in the original global `_data/*.yml` files.
- Korean data is added in `_data/ko`.
- `_site` follows the original global built-output shape, adjusted to contain the combined bilingual page.
- The language switcher changes the visible resume instantly without leaving the page.
- The Korean resume no longer shows the phone number.
- The Korean title now says `Product Manager`.

## Built output

The generated/static page is in `_site/index.html`, matching the original project convention.

## Jekyll source

The Jekyll source entry is `index.md`.

```sh
bundle exec jekyll build
```

## Credits

Built from the original resume pages using the sproogen modern resume theme output.
