import React from "react"
import ContactCardObj from './ContactCardObj'

function ContactCard() {
    return (
        <div >
            <ContactCardObj 
            contact={{
                name : "Mr. Whiskerson" ,
                imgUrl : "http://placekitten.com/300/200" ,
                phone : "(212) 555-1234" ,
                email : "mr.whiskaz@catnap.meow",
            }}
            />
            
            <ContactCardObj 
                contact ={{
                    name  :"Fluffykins" ,
                    imgUrl:"http://placekitten.com/400/200" ,
                    phone :"(212) 555-2345" ,
                    email :"fluff@me.com"
                }}
            />
            
            <ContactCardObj 
                contact = {{
                    name   :"Destroyer" ,
                    imgUrl :"http://placekitten.com/400/300" ,
                    phone  :"(212) 555-3456" ,
                    email  :"ofworlds@yahoo.com"
                }}
            />
            
            <ContactCardObj 
                contact = {{
                    name  :"Felix" ,
                    imgUrl:"http://placekitten.com/200/100" ,
                    phone :"(212) 555-4567" ,
                    email :"thecat@hotmail.com"
                }}
            />            
        </div>
        
    )
}

export default ContactCard