import React from "react";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import { useParams, useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import "./Create.css";
import review from "../../img/review.jpg";
import { Form, Input, Button, Select, Tag, Radio } from "antd";
const options = [
  { value: "Action" },
  { value: "Adventure" },
  { value: "RPG" },
  { value: "Shooter" },
  { value: "Simulation" },
  { value: "Sport" },
  { value: "Strategy" },
  { value: "Puzzle" },
];
function tagRender(props) {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={"gold"}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const CreateGame = (props) => {
  const [form] = Form.useForm();
  const [user] = React.useContext(UserContext);
  const [fetch, setFetch] = React.useState(true);
  let token = user ? user.token : null;
  let history = useHistory();
  let { id } = useParams();
  const [input, setInput] = React.useState({
    name: "",
    release: 0,
    genre: "Action",
    image_url: "",
    singlePlayer: 1,
    multiPlayer: 1,
    platform: "",
  });
  React.useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      if (id) {
        const result = await axios.get(
          `https://backendexample.sanbersy.com/api/data-game/${id}`
        );
        const {
          name,
          release,
          Genre,
          image_url,
          singlePlayer,
          multiPlayer,
          platform,
        } = result.data;
        setInput({
          name,
          release,
          Genre,
          image_url,
          singlePlayer,
          multiPlayer,
          platform,
        });
      }
    };
    if (fetch) {
      fetchData();
      setFetch(false);
    }
    form.setFieldsValue(input);
  }, [fetch, form, input]);
  const onFinish = (values) => {
    const newData = {
      name: values.name,
      release: values.release,
      genre: values.genre.toString(),
      image_url: values.image_url,
      singlePlayer: values.singlePlayer,
      multiPlayer: values.multiPlayer,
      platform: values.platform,
    };
    if (id) {
      axios
        .put(
          `https://backendexample.sanbersy.com/api/data-game/${id}`,
          newData,
          { headers: { Authorization: "Bearer " + token } }
        )
        .then(() => {
          history.push("/games");
        })
        .catch((err) => {
          alert(JSON.stringify(err.response.data));
        });
    } else {
      axios
        .post(`https://backendexample.sanbersy.com/api/data-game`, newData, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          history.push("/games");
        })
        .catch((err) => {
          alert(JSON.stringify(err));
        });
    }
  };

  return (
    <>
      <Form
        className='create'
        layout='vertical'
        name="nest-messages"
        onFinish={onFinish}
        form={form}
        validateMessages={validateMessages}
        initialValues={input}
      >
        <Form.Item
          name={["name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["release"]}
          label="Release"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="genre"
          label="Genre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode="multiple"
            showArrow
            tagRender={tagRender}
            style={{ width: "100%" }}
            options={options}
          />
        </Form.Item>
        <Form.Item name={["singlePlayer"]} label="Single Player">
          <Radio.Group>
            <Radio value={1}>Yes</Radio>
            <Radio value={0}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name={["multiPlayer"]} label="Multi Player">
          <Radio.Group>
            <Radio value={1}>Yes</Radio>
            <Radio value={0}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name={["platform"]}
          label="Platform"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["image_url"]}
          label="Image URL"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className="image">
        <img src={review} alt='icon-review'/>
      </div>
    </>
  );
};
export default CreateGame;
