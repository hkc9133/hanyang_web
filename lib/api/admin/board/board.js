import client from '../../client';
import qs from 'qs';
export const getBoardList = (data) =>{
    const queryString = qs.stringify(data);
    console.log(queryString)
    return client.get(`/admin/board?${queryString}`);
}

export const getBoard = (boardName) =>{
    console.log(boardName)
    return client.get(`/admin/board/${boardName}`);
}

export const getBoardInfoAll = () =>{
    return client.get(`/admin/board/board_info`);
}
export const updateBoard = (board) =>{
    console.log(board)
    return client.put(`/admin/board/${board.boardEnName}`,board);
}
export const getBoardContentList = (data) =>{
    const queryString = qs.stringify(data);
    console.log(queryString)
    return client.get(`/admin/board/content?${queryString}`);
}


