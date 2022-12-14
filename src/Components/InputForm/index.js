import { useRef } from "react"

export default function InputForm({paintTask}) {

  const textInput = useRef()

  function inputValue() {
    paintTask(textInput.current.value)
  }


  return (
    <div className="input-group mb-3">
      <input ref={textInput} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button onClick={inputValue} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
    </div>
  )
}