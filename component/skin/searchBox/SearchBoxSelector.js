import React from 'react';
import SearchBoxStyle01 from "./SearchBoxStyle01";
import SearchBoxStyle02 from "./SearchBoxStyle02";

const SearchBoxSelector = (props) => {
    const setSkin = () =>{
        const skinName = props.skinName;

        switch (skinName){
            case 'SearchBoxStyle01':
                return <SearchBoxStyle01 {...props}/>
            case 'SearchBoxStyle02':
                return <SearchBoxStyle02 {...props}/>
        }
    }
    return (
        setSkin()
    );
};

export default React.memo(SearchBoxSelector);
