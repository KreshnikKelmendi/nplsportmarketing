import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';


const DropDown2 = ({ navToggle }) => {
    const items = [
        {
          label: <Link onClick={navToggle} className="text-decoration-none text-uppercase" to="/about-us">Rreth Nesh</Link>,
          key: '0',
        },
        {
          label: <Link onClick={navToggle} className="text-decoration-none text-uppercase" to="/korniza-ligjore-npl">Korniza ligjore</Link>,
          key: '1',
        }
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
            Rreth Nesh
            <DownOutlined />
          </Space>
        </Link>
      </Dropdown>
    )
}

export default DropDown2;