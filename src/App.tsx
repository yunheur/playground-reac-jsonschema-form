import { Layout, List, Divider } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Link, Routes, Route } from "react-router-dom";
import Examples from "./examples";

const { Header, Content } = Layout;

export default function App() {
  const exampleGroups = [
    {
      title: "공식문서 예시",
      prefixPath: "official",
      items: [
        { label: "Simple", component: <Examples.Official.Simple /> },
        { label: "Validation", component: <Examples.Official.Validation /> },
        { label: "Nested", component: <Examples.Official.Nested /> },
        { label: "Errors", component: <Examples.Official.Errors /> },
        { label: "ErrorSchema", component: <Examples.Official.ErrorSchema /> },
        { label: "Files", component: <Examples.Official.Files /> },
        { label: "Widgets", component: <Examples.Official.Widgets /> },
        { label: "DateAndTime", component: <Examples.Official.DateAndTime /> }
      ]
    },
    {
      title: "커스텀 예시",
      prefixPath: "customs",
      items: [
        {
          label: "CustomWidgets",
          component: <Examples.Customs.CustomWidgets />
        },
        { label: "CustomFields", component: <Examples.Customs.CustomFields /> },
        {
          label: "CustomTemplates",
          component: <Examples.Customs.CustomTemplates />
        }
      ]
    },
    {
      title: "Flimax 예시",
      prefixPath: "flimax",
      items: [{ label: "SignUp", component: <Examples.Flimax.SignUp /> }]
    }
  ];

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <div style={{ display: "flex", alignItems: "center" }}>
            <HomeOutlined
              style={{ fontSize: "24px", color: "white" }}
              onClick={(_) => {}}
            />
          </div>
        </Link>
      </Header>
      <Content style={{ padding: "10px 50px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {exampleGroups.map((exampleGroup) => (
                  <>
                    <Divider orientation="left">{exampleGroup.title}</Divider>
                    <List
                      dataSource={exampleGroup.items}
                      renderItem={(item) => (
                        <List.Item>
                          <Link
                            to={`/${exampleGroup.prefixPath}/${item.label}`}
                          >
                            {item.label}
                          </Link>
                        </List.Item>
                      )}
                    />
                  </>
                ))}
              </>
            }
          />
        </Routes>
        {exampleGroups.map(({ prefixPath, items }) => (
          <Routes>
            {items.map((item) => (
              <Route
                path={`/${prefixPath}/${item.label}`}
                element={item.component}
              />
            ))}
          </Routes>
        ))}
      </Content>
    </Layout>
  );
}
