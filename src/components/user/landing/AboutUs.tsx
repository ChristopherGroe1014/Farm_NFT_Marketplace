import * as React from 'react'

import { DescDiv, ButtonDiv, ImgDiv, MainDiv } from './styled/AboutUs.styled'
import { TitleDiv } from './styled/Common.styled'
import { Grid, useMediaQuery } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import HARVEST1 from 'src/assets/HARVEST 1.png'
import HARVEST2 from 'src/assets/HARVEST 2.png'
import HARVEST3 from 'src/assets/HARVEST 3.png'
import HARVEST4 from 'src/assets/HARVEST 4.png'
import HARVEST5 from 'src/assets/HARVEST 5.png'
import HARVEST6 from 'src/assets/HARVEST 6.png'

const AboutUs = () => {
  const match760 = useMediaQuery('(min-width: 760px)')
  const AboutUsImg = [HARVEST1, HARVEST2, HARVEST3, HARVEST4, HARVEST5, HARVEST6]

  return (
    <MainDiv id="aboutus">
      <Grid container>
        <Grid item xs={match760 ? 5 : 12}>
          <TitleDiv>AboutUs</TitleDiv>
          <DescDiv>
            The value of the Aurora Farm NFT is directly linked to the performance of the farm and agricultural production, which brings a certain stability and security to the investment.
            <br/><br/>Additionally, the investor who purchases Aurora Farm NFT is contributin to the real economy, supporting agricultural production, and consequently helping to feed the world&lsquo;s population.
            <br/><br/>This type of token is known as a &quot;stablecoin&quot; and is commonly used for speculative purpose, as it is not tied to any asset or commodity.<br/>
            This means that the value of the token is completely dependent on investor confidence and market supply and demand.
          </DescDiv>
          <ButtonDiv>View More<ArrowForwardIcon /></ButtonDiv>
        </Grid>
        <Grid item xs={match760 ? 7 : 12}>
          <ImgDiv src={AboutUsImg[Math.floor(Math.random() * 10 % 3)]}>
          </ImgDiv>
        </Grid>
      </Grid>
    </MainDiv>
  )
}

export default AboutUs