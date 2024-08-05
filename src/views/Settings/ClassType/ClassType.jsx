import React from "react";
import Background from "../../../shared/Background/Background";
import Index from "./index";
import ClassTypeTable from "./ClassTypeTable";

const ClassType = () => {
    const { AllClassTypes, loading, history, search, setSearch, deleteRow } = Index();
    return (
        <Background heading="Setting">
            <ClassTypeTable
                AllClassTypes={AllClassTypes}
                loading={loading}
                history={history}
                search={search}
                setSearch={setSearch}
                deleteRow={deleteRow}
            />
        </Background>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};
export default React.memo(ClassType, comparisonFn);
