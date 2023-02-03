import React, { useState } from "react";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 15px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1250px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  padding: 15px;
  border-bottom: inset;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const InputSearch = styled.input`
  width: 300px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Grid = ({ users, setUsers, searchUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const [search, setSearch] = useState('');

  const searchToLowerCase = search.toLowerCase();

  const alunos = users.filter((item) =>
  item.nome.toLowerCase().startsWith(searchToLowerCase)
);

  console.log(search);
  return (
    <>
      <Label>Pesquisar</Label>
      <InputSearch type="text" name="pesquisa" value={search} onChange={(e) => setSearch(e.target.value)} />

      <Table>

        <Thead>
          <Tr>
            <Th onlyWeb>Matrícula</Th>
            <Th>Nome</Th>
            <Th>Série</Th>
            <Th>Curso</Th>
            <Th>Dispositivo</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {alunos.map((i) => (
            <Tr key={i}>
              <Td width="11%" onlyWeb>{i.matricula}</Td>
              <Td width="30%">{i.nome}</Td>
              <Td width="20%">{i.serie}</Td>
              <Td width="17%">{i.curso}</Td>
              <Td width="15%">{i.dispositivo}</Td>

              <Td alignCenter="5%">
                <FaEdit onClick={() => handleEdit(i)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default Grid;