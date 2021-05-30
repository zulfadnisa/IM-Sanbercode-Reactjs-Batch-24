import React from "react";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import { useParams, useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button,  Select, Tag } from "antd";
import './Create.css'
import review from '../../img/review.jpg'
const options = [
  { value: "Action" },
  { value: "Adventure" },
  { value: "Drama" },
  { value: "Family" },
  { value: "Thriller" },
  { value: "Death Game" },
  { value: "Horror" },
  { value: "Sci-Fi" },
  { value: "Anime" },
  { value: "Romance" },
  { value: "Mystery" },
  { value: "Comedy" },
  { value: "Fantasy" },
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
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const CreateMovie = (props) => {
  const [form] = Form.useForm();
  const [user] = React.useContext(UserContext);
  const [fetch, setFetch] = React.useState(true);
  let token = user ? user.token : null;
  let history = useHistory();
  let { id } = useParams();
  const [input, setInput] = React.useState({
    title: "",
    year: 0,
    duration: 0,
    genre: "Action",
    rating: 0,
    image_url: "",
    description: "",
    review: "",
  });

  React.useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await axios.get(
          `https://backendexample.sanbersy.com/api/data-movie/${id}`
        );
        const {
          title,
          year,
          duration,
          genre,
          rating,
          image_url,
          description,
          review,
        } = result.data;
        setInput({
          title,
          year,
          duration,
          genre,
          rating,
          image_url,
          description,
          review,
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
      title: values.title,
      year: parseInt(values.year),
      duration: parseInt(values.duration),
      genre: values.genre.toString(),
      rating: parseInt(values.rating),
      image_url: values.image_url,
      description: values.description,
      review: values.review,
    };
    if (id) {
      axios
        .put(
          `https://backendexample.sanbersy.com/api/data-movie/${id}`,
          newData,
          { headers: { Authorization: "Bearer " + token } }
        )
        .then(() => {
          history.push("/movies");
        })
        .catch((err) => {
          alert(JSON.stringify(err.response.data));
        });
    } else {
      axios
        .post(`https://backendexample.sanbersy.com/api/data-movie`, newData, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          history.push("/movies");
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
            name={["title"]}
            label="Title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["year"]}
            label="Year"
            rules={[
              {
                type: "number",
                // min: 1999,
                // max: 2021,
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={["duration"]}
            label="Duration"
            rules={[
              {
                type: "number",
                min: 0,
                required: true,
              },
            ]}
          >
            <InputNumber />
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
          <Form.Item
            name={["rating"]}
            label="Rating"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber min={1} max={10} />
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
          <Form.Item name={["description"]} label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name={["review"]} label="Review">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div className='image'>
          <img src={review} alt='icon-review'/>
        </div>
    </>
  );
};
export default CreateMovie;
