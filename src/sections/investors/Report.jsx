import React from 'react'

const Report = () => {
  return (
    <div className='text-align:center'>

      <h4>list your queries here..</h4>
    <div classname="form-floating">
  <textarea classname="form-control" placeholder="Leave a comment here" id="floatingTextarea" defaultvalue="{&quot;&quot;}"
   defaultValue={"write your queries"} /></div>

<button type="button" classname="btn btn-danger">Submit</button>
    </div>
  )
}

export default Report