import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    width: 980px;
    background-image: url(${require('@/assets/img/wrap-bg.png')});
    background-size: 103%;
    display: flex;
  }
`

export const RecommendSection = styled.div``

export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
`

export const RecommendRight = styled.div`
  margin-left: 1px;
  width: 250px;
`
