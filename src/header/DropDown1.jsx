import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';


const DropDown1 = ({ navToggle}) => {
    const items = [
        {
          label: <Link onClick={navToggle} className="text-decoration-none text-uppercase" to="/staff">Bordi i Drejtorëve</Link>,
          key: '0',
        },{
          label: <Link onClick={navToggle} className="text-decoration-none text-uppercase" to="/board">Bordi i Aksionarëve</Link>,
          key: '1',
        },
        {
          label: <Link onClick={navToggle} className="text-decoration-none text-uppercase" to="/kryeshefi-ekzekutiv">Kryeshefi Ekzekutiv</Link>,
          key: '2',
        },{
          label: <Link onClick={navToggle} className="text-decoration-none text-uppercase" to="/stafiNpl">Stafi</Link>,
          key: '3',
        },
        {
          label: <Link onClick={navToggle} className="text-decoration-none text-uppercase" to="/">Struktura Organizative</Link>,
          key: '4',
        },
      ];
    return(
        <Dropdown
        menu={{
          items,
        }}
        trigger={['hover']}
      >
        <Link onClick={(e) => e.preventDefault()}>
          <Space className="managementLink text-center">
            Menaxhmenti
            <DownOutlined />
          </Space>
        </Link>
      </Dropdown>
    )
}

export default DropDown1;