import { useRecordContext } from 'react-admin';

type MyUrlFieldProps = {
	source: any;
};

const MyUrlField = ({ source }: MyUrlFieldProps) => {
	const record = useRecordContext();
	if (!record) return null;
	return <a href={record[source]}>{record[source]}</a>;
};
export default MyUrlField;
