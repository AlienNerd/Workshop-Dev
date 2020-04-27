function onOff(){document
        .querySelector("#modal")
        .classList
        .toggle("hide")
}

function checkField(event) {

        const valuesToCheck = [
                "title",
                "image",
                "category",
                "description",
                "link",
        ]

        const isEmpty = valuesToCheck.find(function(value) {

                const CString = typeof event.target[value].value === "string"
                const CEmpty = !event.target[value].value.trim()

                if(CString && CEmpty) {
                        return true
                }
        })

        if(isEmpty) {
                event.preventDefault()
                alert("Está com preguiça? Preenche direito!")
        }

}

