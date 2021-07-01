window.addEventListener("DOMContentLoaded", event => {
    const editButton = document.querySelectorAll('.edit-button')
    // const productDescDiv = document.getElementById('description-div')

    editButton.forEach(node => {

        node.addEventListener("click", async(event) => {
        event.preventDefault();

        const productId = Number(event.target.id.split('-')[2]);
        const editBody = document.getElementById(`edit-body-${productId}`).value;
        const desc = document.getElementById(`description-container-${productId}`)


        const updateDescFetch = await fetch(`/users/product/${productId}`, {
                method: "PATCH",
                headers: {
                  "content-type": "application/json"
                },
                body: JSON.stringify({
                    description: editBody,
                    productId
                })
            })

        const json = await updateDescFetch.json();
        console.log(json, 'JSON')
        desc.innerHTML = json.updateProduct.description;
        editBody ="";

    })
  })

})


//create router .patch
//fetchcall /users/profile
//setup back end and console log
//
