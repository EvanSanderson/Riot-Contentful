<zoo>
  <h3> This is my Riot container. </h3>
  <animal each={items}> </animal>

  this.items = opts.items;
</zoo>

<animal>
  <h1> Zoo Animal! </h1>
  <h3> {fields.name} </h3>
  <p> {fields.image.fields.description} </p>
  <div onclick={hideShow} class="product-image" style="background: url({fields.image.fields.file.url}) no-repeat center center; background-position: center;">
  </div>

  hideShow(e) {
    console.log('clicked');
    e.currentTarget.style.width = '100%';
  }
  <style>
    :scope {color: blue}
    .product-image {width: 300px; height: 300px;}
  </style>

</animal>
