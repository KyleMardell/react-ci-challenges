import React from 'react'

function NavBarForm(props) {
  return (
    <div>
        {!props.displayForm ? (
            <form>
                <label labelFor='username'>Username: </label>
                <input id='username' type='text' placeholder='username'></input>
                <label labelFor='password'>Password: </label>
                <input id='password' type='password' placeholder='password'></input>
                <button type='submit' onClick={props.toggleDisplayForm}>Submit</button>
            </form>
        ) : (
            <button onClick={props.toggleDisplayForm}>Log in</button>
        )}
        
    </div>
  )
}

export default NavBarForm