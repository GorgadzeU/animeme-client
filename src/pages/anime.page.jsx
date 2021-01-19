import React from 'react'
import PropTypes from 'prop-types'
import PageWrapper from '../components/UI/page-wrapper'
import styled from 'styled-components';
import AnimeSummary from '../components/anime-summary.component';
import AnimePlayer from '../components/anime-player.component';

import IMG from '../assets/zerkpage.jpg'



const Container = styled(PageWrapper)`
    max-width: 100vw;
    background: url(${IMG}) no-repeat center center;
    background-size: cover;
    
`

const AnimePage = props => {
    return (
      
            <Container>
                <AnimeSummary />
                <AnimePlayer />
            </Container>
     
    )
}

AnimePage.propTypes = {

}

export default AnimePage
