import React from 'react'

export default function FormContainer() {

    const textInput = "py-2 px-3 rounded border-2 border-rosebud text-base mt-1 focus:outline-none focus:ring-2 focus:ring-rosebud-600 focus:border-transparent"
    return (
        <section id="intake-form" className="bg-rosebud">
            <div className="p-12">
                <div className="flex justify-center mx-20 my-8 p-4 bg-white rounded filter drop-shadow">
                    <div className="flex justify-center text-2xl font-display">Kitten Intake</div>
                    
                    <div className="">
                    <form>
                        <label>Name</label>
                        <input type='text' className={textInput} placeholder="Name"/>
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
