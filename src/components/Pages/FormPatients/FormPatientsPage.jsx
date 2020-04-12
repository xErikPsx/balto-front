import React from 'react';
import {
  Form,
  Input,
  Row,
  Col,
  Select,
  Checkbox,
  DatePicker,
  Button
} from 'antd';
import { FrownOutlined, SmileOutlined, MehOutlined } from '@ant-design/icons';
import imagePlaceholder from '../../../assets/FormPatientsPage/personPlaceholder.jpg';
import PhotoUpload from '../../Molecules/PhotoUpload/PhotoUpload';

// Space between cols and rows, vertical / horizontal
const rowGutter = 16;

const colPaddingX = { padding: '0 6px' };
const colPaddingY = { padding: '6px 0px' };

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 3 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 3 },
    sm: { span: 8 }
  }
};
//Breakpoints inputs
const bkp = {
  xs: 12,
  sm: 6,
  lg: 8,
  xxl: 6
};

export default function FormPatientsPage() {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <div className="form-patients">
        <h2 className="form-patients__title">Ingresar nuevo paciente</h2>
        <Form
          {...formItemLayout}
          // layout="inline"
          form={form}
          name="formPatients"
          onFinish={onFinish}
          // initialValues={}
          scrollToFirstError
        >
          <Row>
            {/* <Col xs={10} sm={bkp.sm} lg={bkp.lg} xxl={bkp.xxl}>
              Upload a picture of the patient
              <PhotoUpload title="Fotografía del cliente" />
            </Col> */}
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="nombre"
                label="Nombre::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa un nombre!',
                    whitespace: true
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="apellidos"
                label="Apellidos::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa los apellidos!',
                    whitespace: true
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="ciudad"
                label="Ciudad::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa la ciudad!',
                    whitespace: true
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="seguroSocial"
                label="Seguro Social::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa el seguro social!',
                    whitespace: true
                  }
                ]}
              >
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="direccion"
                label="Dirección::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa la dirección!',
                    whitespace: true
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="telefono"
                label="Teléfono::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa un número de teléfono!',
                    whitespace: true
                  }
                ]}
              >
                <Input type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <h3 className="form-patients__subtitle">Datos</h3>
              <Form.Item
                className="form-patients--remove-row-mb"
                name="genero"
                label="Género"
                hasFeedback
                rules={[
                  { required: true, message: 'Por favor, ingresa el género!' }
                ]}
              >
                <Select placeholder="Género">
                  <Option value="masculino">Masculino</Option>
                  <Option value="femenino">Femenino</Option>
                </Select>
              </Form.Item>
              <Form.Item
                className="form-patients--remove-row-mb"
                name="edad"
                label="Edad::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa la edad!',
                    whitespace: true
                  }
                ]}
              >
                <Input type="number" />
              </Form.Item>

              <Form.Item
                className="form-patients--remove-row-mb"
                name="peso"
                label="Peso::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa el peso!',
                    whitespace: true
                  }
                ]}
              >
                <Input type="number" suffix="kg" />
              </Form.Item>
              <Form.Item
                className="form-patients--remove-row-mb"
                name="estatura"
                label="Estatura::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa la estatura!',
                    whitespace: true
                  }
                ]}
              >
                <Input type="number" suffix="m" />
              </Form.Item>
              <Form.Item
                className="form-patients--remove-row-mb"
                name="tipoSangre"
                label="Tipo de sangre::"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa el tipo de sangre!'
                  }
                ]}
              >
                <Select placeholder="Tipo de sangre">
                  <Option value="O-">O-</Option>
                  <Option value="O+">O+</Option>
                  <Option value="A-">A-</Option>
                  <Option value="A+">A+</Option>
                  <Option value="B-">B-</Option>
                  <Option value="B+">B+</Option>
                  <Option value="AB-">AB-</Option>
                  <Option value="AB+">AB+</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <h3 className="form-patients__subtitle">Síntomas</h3>
              <Form.Item name="sintomas">
                <Row>
                  <Col xs={bkp.xs} sm={bkp.sm} lg={bkp.lg} xxl={bkp.xxl}>
                    <Checkbox
                      value="Fiebre"
                      className="form-patients--symptomsCheckbox"
                    >
                      Fiebre
                    </Checkbox>
                  </Col>
                  <Col
                    xs={24}
                    sm={bkp.sm}
                    lg={bkp.lg}
                    xxl={bkp.xxl}
                    style={colPaddingY}
                  >
                    <Checkbox
                      value="Congestion nasal"
                      className="form-patients--symptomsCheckbox"
                    >
                      Congestion nasal
                    </Checkbox>
                  </Col>
                  <Col
                    xs={24}
                    sm={bkp.sm}
                    lg={bkp.lg}
                    xxl={bkp.xxl}
                    style={colPaddingY}
                  >
                    <Checkbox
                      value="Dolor de garganta"
                      className="form-patients--symptomsCheckbox"
                    >
                      Dolor de garganta
                    </Checkbox>
                  </Col>
                  <Col
                    xs={24}
                    sm={bkp.sm}
                    lg={bkp.lg}
                    xxl={bkp.xxl}
                    style={colPaddingY}
                  >
                    <Checkbox
                      value="Secreción nasal"
                      className="form-patients--symptomsCheckbox"
                    >
                      Secreción nasal
                    </Checkbox>
                  </Col>
                  <Col
                    xs={24}
                    sm={bkp.sm}
                    lg={bkp.lg}
                    xxl={bkp.xxl}
                    style={colPaddingY}
                  >
                    <Checkbox
                      value="Dificultad para respirar"
                      className="form-patients--symptomsCheckbox"
                    >
                      Dificultad para respirar
                    </Checkbox>
                  </Col>
                  <Col
                    xs={24}
                    sm={bkp.sm}
                    lg={bkp.lg}
                    xxl={bkp.xxl}
                    style={colPaddingY}
                  >
                    <Checkbox
                      value="Dificultad para respirar"
                      className="form-patients--symptomsCheckbox"
                    >
                      Dificultad para respirar
                    </Checkbox>
                  </Col>
                  <Col
                    xs={24}
                    sm={bkp.sm}
                    lg={bkp.lg}
                    xxl={bkp.xxl}
                    style={colPaddingY}
                  >
                    <Checkbox
                      value="Fatiga"
                      className="form-patients--symptomsCheckbox"
                    >
                      Fatiga
                    </Checkbox>
                  </Col>
                  <Col
                    xs={24}
                    sm={bkp.sm}
                    lg={bkp.lg}
                    xxl={bkp.xxl}
                    style={colPaddingY}
                  >
                    <Checkbox
                      value="Dolor de cabeza"
                      className="form-patients--symptomsCheckbox"
                    >
                      Dolor de cabeza
                    </Checkbox>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col
              xs={24}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="alergias"
                label="Alergias::"
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col
              xs={24}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <h3 className="form-patients__subtitle">
                Contacto de emergencia
              </h3>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="nombreFamiliar"
                label="Nombre completo de familiar::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa el nombre de un familiar!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="direccionFamiliar"
                label="Direccion de familiar::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa la direccion de un familiar!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="telefonoFamiliar"
                label="Teléfono de familiar::"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa el telefono de un familiar!'
                  }
                ]}
              >
                <Input type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col
              xs={24}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <h3 className="form-patients__subtitle">Estado Actual</h3>
            </Col>
            <Col
              xs={24}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <div className="form-patients__estadoWrapper">
                <div>
                  <FrownOutlined className="form-patients__estado-icono" />
                  <h4>Empeorando</h4>
                </div>
                <div>
                  <MehOutlined className="form-patients__estado-icono" />
                  <h4>Estable</h4>
                </div>
                <div>
                  <SmileOutlined className="form-patients__estado-icono" />
                  <h4>Mejorando</h4>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              xs={24}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <h3 className="form-patients__subtitle">Fechas</h3>
            </Col>
            <Col
              xs={12}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="inicioSintomas"
                label="Inicio de síntomas"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message:
                      'Por favor, ingresa la fecha de inicio de sintomas!'
                  }
                ]}
              >
                <DatePicker format="DD/MM/YYYY" />
              </Form.Item>
            </Col>
            <Col
              xs={12}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="fechaRegistro"
                label="Fecha de registro"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa la fecha de registro!'
                  }
                ]}
              >
                <DatePicker format="DD/MM/YYYY" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col
              xs={24}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <h3 className="form-patients__subtitle">Obvseraciones</h3>
            </Col>
            <Col
              xs={24}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPaddingX}
            >
              <Form.Item
                className="form-patients--remove-row-mb"
                name="alergias"
                label="Alergias::"
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Registrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
