import React from 'react'

const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%",
    margin: "20px, 0"
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '30px',
  width: '100%',
}

function FooterNav({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
            </div>
        </div>
    )
}

export default FooterNav;