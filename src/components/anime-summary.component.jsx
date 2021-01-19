import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import IMG from '../assets/zerk.jpg'

const Wrapper = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    div {
        margin: 0 10px;
    }
`
const Image = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 300px;
        height: 100%;
    }
`
const Description = styled.div`

`

const Info = styled.div`

`


const AnimeSummary = props => {
    return (
        <Wrapper>
            <Image>
                <img src={IMG}/>
            </Image>
            <Description>
                Lorem ipsum dolor sit amet consectetur a
                dipisicing elit. Sequi aut quibusdam laborum 
                suscipit, quam ipsa aperiam dolore debitis quae
                 tempore expedita ad molestiae laboriosam eaque
                  corporis voluptas quo provident nesciunt et bland
                  itiis molestias. Officiis recusandae non nobis voluptatum 
                illum quod debitis velit aliquid commodi ipsa
                 delectus aliquam doloribus, soluta cupiditate!
            </Description>

            <Info>
                <span>name: zerk</span>
                <span>genre: zerk, zerk, zerk</span>
                <span>episodes: 26</span>
                <span>MAL: 9.9</span>
            </Info>
        </Wrapper>
    )
}

AnimeSummary.propTypes = {

}

export default AnimeSummary
