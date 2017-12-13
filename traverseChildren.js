  //traverse array of categories until articleCategory is true 
  
  traverseCategories: function(category) {
    return category.articleCategory
      ? category
      : this.traverseCategories(category.children[0]);
  }
