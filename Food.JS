script type="text/javascript"

      var ingredients = {
        1 : 'beans',
        10 : 'cilantro',
        110 : 'onion',
		1110: 'Steak',
		11110: 'Chorrizo',
		111110: 'Pork shoulder',
		1111110: 'Ground Beef',
		11111110: 'Peas and Carrots',
		111111110: 'Masa',
		1111111110: 'Green Peppers',
		11111111110: 'Homney',
		
		
		
      }

      var recipeCodes = {
        0 : 'nothing',
        1111 : 'Beans w/Chorrizo' ,
        11222221 : 'Pozole',
        111220 : 'Carnitas',
        1111222220 : 'tamales',
        12222220 : 'Picadillo',
        1230 : 'steak Tacos ',
      }

      function bindIngredients(){

        $('.options').on('click', '*', function(arg) {

          console.log('asdf')
          console.log(this)
          console.log(arg)

        })

      }



      function addIngredient(added, id, name){

        $((added ? '.selections' : '.options') + ' #' + id).remove()

        $('<div/>', {
          id: id,
          text: name,
          onclick : "addIngredient(" + !added + ", " + id + ", '" + name + "')"
        }).appendTo( added ? '.options' : '.selections' );

        makeRecipe()

      }

      function makeRecipe(){

        var tags = $(".dragger .selections").children()

        var recipeTags = $('.recipe .tags')

        var recipeCode = 0

        recipeTags.html('')

        $.each(tags, function(index, element){

          recipeTags.append('<div>' + element.innerHTML + '</div>')

          recipeCode += parseInt(element.id)

        })

        $('.recipe .title').html(recipeCodes[recipeCode])

      }

      for(id in ingredients){

        addIngredient(true, id,ingredients[id])

      }


 
