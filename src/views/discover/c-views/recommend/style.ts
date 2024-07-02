import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    background-image: url(${require('@/assets/img/wrap-bg.png')});
    background-size: 103%;
    /* background-position: 20px; */
    display: flex;

    > .left {
      padding: 20px;
      width: 729px;
      overflow: hidden;
    }
    > .right {
      margin-left: 1px;
      width: 250px;
    }
  }
`

export const RecommendSection = styled.div`
  /* > .content {
    border: 1px solid #d3d3d3;
    width: 980px;
    background-image: url(${require('@/assets/img/wrap-bg.png')});
    display: flex;
  } */
`

export const RecommendLeft = styled.div``

export const RecommendRight = styled.div``
