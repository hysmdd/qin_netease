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
    }
    > .right {
      margin-left: 1px;
      width: 250px;
    }
  }
`

export const RecommendSection = styled.div`
<<<<<<< HEAD
  /* > .content {
    border: 1px solid #d3d3d3;
    width: 980px;
    background-image: url(${require('@/assets/img/wrap-bg.png')});
    display: flex;
  } */
=======
  border: 1px solid #d3d3d3;
  width: 980px;
  background-image: url(${require('@/assets/img/wrap-bg.png')});
  background-size: 103%;
  display: flex;
>>>>>>> 9892b6a6942b40b2a7f1bdf30cb333f012789bff
`

export const RecommendLeft = styled.div``

export const RecommendRight = styled.div``
