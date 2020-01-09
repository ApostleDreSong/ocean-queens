import React from 'react';

const styles = {
    img: {
        width: "100%",
        height: "100%"
    }
}

function HeaderImg(props) {

    return (
        <div>
            <img src={props.source} style={styles.img} alt="about us" />
        </div>
    );
}

export default HeaderImg;