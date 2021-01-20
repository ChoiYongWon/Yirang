import React from "react"
import styled from "styled-components"


const Table = styled.table`
    width:100%;
    text-align:center;
    border-spacing:0;
    
    
`

const TableRow = styled.tr`
    
    
`

const TableHead = styled.th`
    padding: 0.8rem 0.3rem;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    ${props=>{
        switch (props.border){
          case "top":
              return `
                border-top: 3px solid #000000;
              `
          case "bottom":
              return `
                border-bottom: 3px solid #000000;
              `
          default :
              return `
                border-bottom: 2px solid #ccd4e0;
              `
        }
    }
    }
    ${props=>(props.black)?`background-color: black; color: white`: `background-color: #f5f5f5; color: #707070;`}
    
`

const TableBody = styled.td`
    font-size: 0.9rem;
    font-weight: normal;
    font-stretch: normal;
    color: #707070;
    border-bottom: solid #ccd4e0 1px;
    cursor: pointer;
    ${props=>(props.back)?`background-color: #f5f5f5;`:null}

`
const PrimaryKey = styled(TableBody)`
    cursor: pointer;
`

const Index = ({border, black, back, headList, bodyList, primaryKey, onClick, dataOnClick}) => (
    <>
        <Table>
            <thead>
                <TableRow>
                    {
                        headList.map((i, index) => <TableHead border={border} black={black} key={index}>{i}</TableHead>)
                    }
                </TableRow>
            </thead>
            <tbody>
                {
                    bodyList.map((i, index) => {
                        return (
                            <TableRow key={index}>
                                {Object.keys(i).map((data, index) => {
                                    return (data === primaryKey) ?
                                        <PrimaryKey key={index} onClick={onClick}>{i[data]}</PrimaryKey>
                                        :
                                        <TableBody back={back} key={index} onClick={dataOnClick}>{i[data]}</TableBody>
                                })}
                            </TableRow>)
                    })
                }
            </tbody>
        </Table>
    </>
)

export default Index
