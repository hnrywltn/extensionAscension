window.addEventListener("DOMContentLoaded", event => {
    console.log('Hello from anyone or anwhere')
    const editButton = document.querySelectorAll('.edit-button')
    // const productDescDiv = document.getElementById('description-div')
    console.log(editButton)

    editButton.forEach(node => {

        node.addEventListener("click", async(event) => {
        event.preventDefault();

        const productId = Number(event.target.id.split('-')[2]);
        const editBody = document.getElementById(`edit-body-${productId}`)
        const desc = document.getElementById(`description-container-${productId}`)


        const updateDescFetch = await fetch(`users/product/${productId}`, {
                method: "PATCH",
                headers: {
                  "content-type": "application/json"
                },
                body: JSON.stringify({
                    description: desc,
                    productId
                })
            })

        const json = await updateDescFetch.json();
            desc.innerHTML = json.description;
            editBody.value ="";

    })
  })

})


//create router .patch
//fetchcall /users/profile
//setup back end and console log
//
