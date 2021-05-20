import styled from 'styled-components'

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: ${p =>p}rem;
  margin-left: ${p => p}rem;
  ${p => p.reverse && `
    flex-direction: row-reverse;
  `}
  ${p => p.start &&`
    justify-content: flex-start;
  `}
  ${p => p.center &&`
    justify-content: center;
  `}
  ${p => p.end &&`
    justify-content: flex-end;
  `}
  ${p => p.top &&`
    align-items: flex-start;
  `}
  ${p => p.middle &&`
    align-items: center;
  `}
  ${p => p.bottom &&`
    align-items: flex-end;
  `}
  ${p => p.around &&`
    justify-content: space-around;
  `}
  ${p => p.between &&`
    justify-content: space-between;
  `}
  ${p => p.first &&`
    order: -1;
  `}
  ${p => p.last &&`
    order: 1;
  `}
`

export default Row
