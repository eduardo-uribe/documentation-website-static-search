---
layout: base.njk
---

`<static-search>`

A web component that provides text-search without server-side code or database. You can support this open-source project by giving it a star on [Github](https://github.com/eduardo-uribe/static-search).

<static-search
      data-resource-url="index.json"
      data-no-search-results-found-message="No search results found"
      data-show-search-provided-by-message="true"
      data-search-results
    >
<template id="static-search-form" shadowrootmode="open">

<style>
  :host {
    display: block;
    font-size: 16px;
  }

  form {
    display: flex;
    justify-content: space-between;
  }

  input {
    border: 1px solid black;
    border-radius: 2px;
    width: 70%;
    height: 50px;
    text-indent: 0.5rem;
  }

  button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 2px;
    width: 29%;
  }

  :host > ul {
    border: 1px solid black;
    border-radius: 2px;
    list-style: none;
    padding: 0.5rem 0 0;
    max-height: 55vh;
    overflow: scroll;
  }

  :host ul ul {
    padding-left: 25px;
  }

  :host ul ul li {
    margin-bottom: 0.75rem;
  }

  :host ul ul li a {
    line-height: 1.5;
  }

  #search-provided-by-message {
    background-color: rgb(6, 6, 6);
    color: white;
    padding: 0.5rem;
    position: sticky;
    bottom: 0;
  }

  #search-provided-by-message-link {
    color: white;
  }
</style>

<form role="search">
  <input
    type="search"
    placeholder="Search this website"
    required
    aria-label="Search throught this websites content."
  />
  <button>Search</button>
</form>

</template>
</static-search>

## Start using

`<script src="https://cdn.jsdelivr.net/gh/eduardo-uribe/static-search/static-search.js"</script>`

We add the above `<script>` HTML element to embed the executable JavaScript code. The `<script>`'s `src` attribute value specifies the URL of the external JavaScript code.
