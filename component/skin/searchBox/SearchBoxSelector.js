import React from 'react';
import SearchBoxStyle01 from "./SearchBoxStyle01";
import SearchBoxStyle02 from "./SearchBoxStyle02";
import SearchBoxStyle03 from "./SearchBoxStyle03";

const SearchBoxSelector = (props) => {
    const setSkin = () =>{
        const skinName = props.skinName;

        switch (skinName){
            case 'SearchBoxStyle01':
                return <SearchBoxStyle01 {...props}/>
            case 'SearchBoxStyle02':
                return <SearchBoxStyle02 {...props}/>
            case 'SearchBoxStyle03':
                return <SearchBoxStyle03 {...props}/>
        }
    }
    return (
        setSkin()
    );
};

export default React.memo(SearchBoxSelector);
