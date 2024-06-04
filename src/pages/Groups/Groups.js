import MyNavbar from "../../components/MyNavbar/MyNavbar";
import { useParams } from "react-router-dom";
import { GroupsData } from "../../groupsData";
import { Container, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Groups.css";
import Footer from "../../components/Footer/Footer";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import fourth from "../../assets/images/fourth.png";

function Groups() {
  console.log("groupData", GroupsData);

  const groupId = useParams().groupId;
  console.log(groupId);
  const groupInfo = GroupsData.find((group) => group.id == groupId);
  console.log(groupInfo.btn);
  return (
    <>
      <MyNavbar />
      <div>
        <Container>
          <Row className="container1">
            <Col sm={12} md={6} lg={9} className="text">
              <h3 className="padd-1rem">{groupInfo.groupName}</h3>
              <p>{groupInfo.text} </p>
            </Col>
            <Col sm={12} md={6} lg={3} className="prof">
              <img className="img-fluid p-3" src={groupInfo.img} />
            </Col>
          </Row>
            
          <Row className="teacher-div">
            <Col className="imgTxt" lg={3}>
              <img className="myImage" src={groupInfo.teacherImg} />
              <div>{groupInfo.teacher}</div>
            </Col>


          {/* mobile table  */}
            <Col>
              <table className="sm-table">
                <tr>
                  <th style={{ backgroundColor: groupInfo.btn }} className="th">پایه گذار</th>
                  <td className="td">{groupInfo.founder}</td>
                </tr>
                <tr>
                  <th style={{ backgroundColor: groupInfo.btn }} className="th">رنگ</th>
                  <td className="td">{groupInfo.color}</td>
                </tr>
                <tr>
                  <th style={{ backgroundColor: groupInfo.btn }} className="th">حیوان</th>
                  <td className="td">{groupInfo.animal}</td>
                </tr>
                <tr>
                  <th style={{ backgroundColor: groupInfo.btn }} className="th">عنصر</th>
                  <td className="td">{groupInfo.element}</td>
                </tr>
                <tr>
                  <th style={{ backgroundColor: groupInfo.btn }} className="th">روح</th>
                  <td className="td">{groupInfo.soul}</td>
                </tr>
                <tr>
                  <th style={{ backgroundColor: groupInfo.btn }} className="th">اتاق مشترک</th>
                  <td className="td">{groupInfo.room}</td>
                </tr>
              </table>


              {/* laptop table  */}
              <Table responsive="sm" className="md-table" sm={12} md={8} lg={9}>
                <thead>
                  <tr>
                    <th
                      style={{ backgroundColor: groupInfo.btn }}
                      className="th"
                    >
                      پایه گذار
                    </th>
                    <th
                      style={{ backgroundColor: groupInfo.btn }}
                      className="th"
                    >
                      حیوان
                    </th>
                    <th
                      style={{ backgroundColor: groupInfo.btn }}
                      className="th"
                    >
                      رنگ
                    </th>
                    <th
                      style={{ backgroundColor: groupInfo.btn }}
                      className="th"
                    >
                      عنصر
                    </th>
                    <th
                      style={{ backgroundColor: groupInfo.btn }}
                      className="th"
                    >
                      روح
                    </th>
                    <th
                      style={{ backgroundColor: groupInfo.btn }}
                      className="th"
                    >
                      اتاق مشترک
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{groupInfo.founder}</td>
                    <td>{groupInfo.animal}</td>
                    <td>{groupInfo.color}</td>
                    <td>{groupInfo.element}</td>
                    <td>{groupInfo.soul}</td>
                    <td>{groupInfo.room}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
            
        </Container>
      

        <Row className="container2">
          <Col sm={12} md={12} lg={6}>
            <p>
              هاگوارتز بیش از هزار سال پیش تاسیس شده. تاریخ دقیقش نامشخصه. چهار
              نفر از برجسته ترین جادوگرها و ساحره‌های آن دوران، هاگوارتز را
              تاسیس کردند. اسم این چهار شخص سرشناس: گودریک گریفیندور، هلگا
              هافلپاف، روونا ریونکلا و سالازار اسلیترین بود. چهار گروه مدرسه را
              به افتخار آنها نام گذاری کرده‌اند. اونا به کمک هم دور از چشم
              مشنگ‌ها این قلعه را ساختند. چندین سال پی‌در‌پی بنیانگذاران مدرسه،
              در صلح و صفا با هم همکاری کردند. دنبال بچه‌هایی می‌گشتند که آثار و
              نشانه‌ای از سحر و جادو در وجودشان بود و اونا رو به قلعه می‌آوردند
              که به تحصیل در زمینه‌ی سحر و جادو بپردازند. اما کم‌کم بین شان
              اختلاف به وجود آمد. هر کدام معتقد بودند که باید یک‌سری افراد را
              قبول کنند و بعضی را نه. اسلیترین عقیده داشت که علم و دانش سحرآمیز
              باید در خانواده‌ی جادوگرهای اصیل باقی بماند. او دلش نمی‌خواست
              جادوگر‌های مشنگ‌تبار به هاگوارتز راه پیدا کنند. چون عقیده داشت
              آنها مورد اعتماد نیستند. ریونکلا می‌گفت که من فقط به بچه‌های زرنگ
              و باهوش درس می‌دهم. گریفیندور می‌گفت من هم فقط به کسانی درس می‌دهم
              که شجاع و جسور باشند. اما هافلپاف همه را قبول داشت و بین کسی فرق
              نمی‌گذاشت. بعد از مدتی اختلاف اسلیترین و گریفیندور بالا گرفت و
              اسلیترین از مدرسه رفت.
            </p>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <img
              src="https://files.virgool.io/upload/users/106063/posts/uocvmleljffv/xfwygj7x501j.jpeg"
              className="founders"
            />
            <div>
              <p className="caption">
                عکسی از ( از بالا سمت راست ) روونا ریونکلا گودریک گریفیندور
                سالازار اسلیترین و هلگا هافلپاف
              </p>
            </div>
          </Col>
        </Row>
        </div>
      <Footer />
    </>
  );
}
export default Groups;
