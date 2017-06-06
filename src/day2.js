/**
 * Day 2
 * A weather app
 * Have trouble completing the animation part
 * will stçdy on the animation in later experiments
 */
'use strict';

import React,{ Component } from 'react';
import { Platform,Image,ScrollView,StatusBar,StyleSheet,Text,TouchableHighlight,View } from 'react-native';
import Util from './utils';
import Icon from 'react-native-vector-icons/Ionicons';
const weatherData = [{key:0,city:"\u798f\u5dde",night:!0,bg:require("./img/w2.png"),abs:"\u5927\u90e8\u6674\u6717",degree:15,today:{week:"\u661f\u671f\u516d",day:"\u4eca\u5929",high:16,low:14},hours:[{key:101,time:"\u73b0\u5728",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},{key:102,time:"3\u65f6",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},{key:103,time:"4\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:104,time:"5\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:105,time:"6\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:106,time:"06:21",icon:"ios-sunny-outline",degree:"\u65e5\u51fa",color:"#fedf32"},{key:107,time:"7\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:108,time:"8\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:109,time:"9\u65f6",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},{key:110,time:"10\u65f6",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},{key:111,time:"11\u65f6",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},{key:112,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:113,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:114,time:"14\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:115,time:"15\u65f6",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},{key:116,time:"16\u65f6",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},{key:117,time:"17\u65f6",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},{key:118,time:"18\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:119,time:"18:06",icon:"ios-partly-sunny-outline",degree:"\u65e5\u843d",color:"rgba(255,255,255,0.9)"},{key:120,time:"19\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:121,time:"20\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:122,time:"21\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:123,time:"22\u65f6",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:124,time:"23\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:125,time:"0\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:126,time:"1\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:127,time:"2\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}],days:[{key:21,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:21,low:16},{key:22,day:"\u661f\u671f\u4e8c",icon:"ios-rainy",high:22,low:14},{key:23,day:"\u661f\u671f\u4e09",icon:"ios-rainy",high:21,low:11},{key:24,day:"\u661f\u671f\u56db",icon:"ios-rainy",high:12,low:8},{key:25,day:"\u661f\u671f\u4e94",icon:"ios-rainy",high:9,low:7},{key:26,day:"\u661f\u671f\u516d",icon:"ios-partly-sunny",high:13,low:9},{key:27,day:"\u661f\u671f\u65e5",icon:"ios-rainy",high:17,low:13},{key:28,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:18,low:14},{key:29,day:"\u661f\u671f\u4e8c",icon:"ios-partly-sunny",high:22,low:17}],info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",rise:"06:21",down:"18:06",prop:"10%",humi:"94%",dir:"\u4e1c\u5317\u504f\u5317",speed:"3\u5343\u7c73\uff0f\u5c0f\u65f6",feel:"15\xb0",rain:"0.0 \u5398\u7c73",pres:"1,016 \u767e\u5e15",sight:"5.0 \u516c\u91cc",uv:"0"},{key:1,city:"\u5361\u5c14\u52a0\u91cc",night:!1,bg:require("./img/w3.png"),abs:"\u5927\u90e8\u6674\u6717",degree:15,today:{week:"\u661f\u671f\u516d",day:"\u4eca\u5929",high:16,low:14},hours:[{key:101,time:"\u73b0\u5728",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},{key:102,time:"3\u65f6",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},{key:103,time:"4\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:104,time:"5\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:105,time:"6\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:106,time:"06:21",icon:"ios-sunny-outline",degree:"\u65e5\u51fa",color:"#fedf32"},{key:107,time:"7\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:108,time:"8\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:109,time:"9\u65f6",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},{key:110,time:"10\u65f6",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},{key:111,time:"11\u65f6",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},{key:112,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:113,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:114,time:"14\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:115,time:"15\u65f6",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},{key:116,time:"16\u65f6",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},{key:117,time:"17\u65f6",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},{key:118,time:"18\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:119,time:"18:06",icon:"ios-partly-sunny-outline",degree:"\u65e5\u843d",color:"rgba(255,255,255,0.9)"},{key:120,time:"19\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:121,time:"20\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:122,time:"21\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:123,time:"22\u65f6",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:124,time:"23\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:125,time:"0\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:126,time:"1\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:127,time:"2\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}],days:[{key:21,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:21,low:16},{key:22,day:"\u661f\u671f\u4e8c",icon:"ios-rainy",high:22,low:14},{key:23,day:"\u661f\u671f\u4e09",icon:"ios-rainy",high:21,low:11},{key:24,day:"\u661f\u671f\u56db",icon:"ios-rainy",high:12,low:8},{key:25,day:"\u661f\u671f\u4e94",icon:"ios-rainy",high:9,low:7},{key:26,day:"\u661f\u671f\u516d",icon:"ios-partly-sunny",high:13,low:9},{key:27,day:"\u661f\u671f\u65e5",icon:"ios-rainy",high:17,low:13},{key:28,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:18,low:14},{key:29,day:"\u661f\u671f\u4e8c",icon:"ios-partly-sunny",high:22,low:17}],info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",rise:"06:21",down:"18:06",prop:"10%",humi:"94%",dir:"\u4e1c\u5317\u504f\u5317",speed:"3\u5343\u7c73\uff0f\u5c0f\u65f6",feel:"15\xb0",rain:"0.0 \u5398\u7c73",pres:"1,016 \u767e\u5e15",sight:"5.0 \u516c\u91cc",uv:"0"}];

export default class Main extends Component{
	constructor(props){
		super(props);
		this.state = {
			weather: weatherData
		}
	}

	render(){
		const slides = this.state.weather.map((elem, index)=>{
			const hourView = elem.hours.map((hourElem, hourIndex)=>{
				return (
					<View key={hourElem.key} style={styles.hourViewCell}>
						<Text style={hourIndex === 0 ? [styles.hourViewTime, {fontWeight:"700"}] : styles.hourViewTime}>{hourElem.time}</Text>
						<Icon style={[styles.hourViewIcon,{color: hourElem.color}]} name={hourElem.icon} size={25}></Icon>
						<Text style={styles.hourViewDegree}>{hourElem.degree}</Text>
					</View>
				)
			});
			const dayView = elem.days.map((dayElem, hourIndex)=>{
				return (
					<View key={dayElem.key} style={styles.dayViewCell}>
						<Text style={styles.dayViewDay}>{dayElem.day}</Text>
						<Icon name={dayElem.icon} style={styles.dayViewIcon}></Icon>
						<View style={styles.dayViewDegree}>
							<Text style={styles.dayViewHigh}>{dayElem.high}</Text>
							<Text style={styles.dayViewLow}>{dayElem.low}</Text>
						</View>
					</View>
				)
			});
			return(
				<View key={index}>
					<Image source={elem.bg}></Image>
					<ScrollView style={styles.pageContainer} showsHorizontalScrollIndicator={false}>
						<View style={styles.headContainer}>
							<Text style={styles.headCity}>{elem.city}</Text>
							<Text style={styles.headAbs}>{elem.abs}</Text>
							<Text style={styles.headDegree}>{elem.degree}</Text>
							<Text style={styles.headDot}>°</Text>
						</View>
						<View style={styles.todayContainer}>
							<View style={styles.todayDate}>
								<Text style={styles.todayWeek}>{elem.today.week}</Text>
								<Text style={styles.todayDay}>{elem.today.day}</Text>
							</View>
							<View style={styles.todayDegree}>
								<Text style={styles.todayHigh}>{elem.today.high}</Text>
								<Text style={styles.todayLow}>{elem.today.low}</Text>
							</View>							
						</View>
						<ScrollView horizontal={true} style={styles.hourViewContainer} showsHorizontalScrollIndicator={false}>
							{hourView}
						</ScrollView>
						<View style={styles.dayViewContainer}>
							{dayView}
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.info}>{elem.info}</Text>
						</View>
						<View style={styles.otherInfoContainer}>
							<View style={styles.otherInfoCell}>
								<Text style={styles.title}>日出：</Text>
								<Text style={styles.value}>{elem.rise}</Text>
							</View>
							<View style={styles.otherInfoCell}>
								<Text style={styles.title}>日落：</Text>
								<Text style={styles.value}>{elem.down}</Text>
							</View>
							<View style={styles.otherInfoCell}>
								<Text style={styles.title}>降雨概率：</Text>
								<Text style={styles.value}>{elem.prop}</Text>
							</View>
							<View style={styles.otherInfoCell}>
								<Text style={styles.title}>湿度：</Text>
								<Text style={styles.value}>{elem.humi}</Text>
							</View>
							<View style={styles.otherInfoCell}>
								<Text style={styles.title}>风速：</Text>
								<Text style={styles.value}>{elem.dir + elem.speed}</Text>
							</View>
							<View style={styles.otherInfoCell}>
								<Text style={styles.title}>体感温度：</Text>
								<Text style={styles.value}>{elem.feel}</Text>
							</View>
							<View style={styles.otherInfoCell}>
								<Text style={styles.title}>降水量：</Text>
								<Text style={styles.value}>{elem.rain}</Text>
							</View>
							<View style={styles.otherInfoCell}>
								<Text style={styles.title}>气压：</Text>
								<Text style={styles.value}>{elem.pres}</Text>
							</View>
							<View style={styles.otherInfoCell}>
								<Text style={styles.title}>能见度：</Text>
								<Text style={styles.value}>{elem.sight}</Text>
							</View>
							<View style={styles.otherInfoCell}>
								<Text style={styles.title}>紫外线指数：</Text>
								<Text style={styles.value}>{elem.uv}</Text>
							</View>
						</View>
					</ScrollView>
				</View>		
			)
		});
			
		return(
			<View>
				{slides[1]}			
			</View>
		)
	}
}

const styles = StyleSheet.create({
	pageContainer: {
		position: "absolute",
		width: Util.size.width,
		height: Util.size.height - 70,
		top: 20,
		left: 0,
		backgroundColor: "transparent"
	},
	headContainer: {
		width: Util.size.width,
		height: 300,
		alignItems: "center",
		justifyContent: "center"
	},
	headCity: {
		fontSize: 30,
		color: "#fff",
		marginBottom: 10
	},
	headAbs: {
		fontSize: 15,
		color: "#fff"
	},
	headDegree: {
		fontSize: 85,
		color: "#fff",
		fontWeight: "100"
	},
	headDot: {
		fontSize: 30,
		color: "#fff",
		fontWeight: "200",
		position: "absolute",
		top: 140,
		right: Util.size.width/2-55 
	},
	todayContainer: {
		flexDirection: "row",
		borderBottomWidth: Util.pixel,borderColor: "rgba(255,255,255,0.7)",
		paddingBottom: 10,
		marginBottom: 10
	},
	todayDate:{
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start"
	},
	todayDegree:{
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end"
	},
	todayDay: {
		fontSize: 15,
		color: "#fff",
		marginLeft: 20
	},
	todayWeek: {
		fontSize: 15,
		color: "#fff",
		marginLeft: 15,
	},
	todayHigh: {
		fontSize: 16,
		color: "#fff",
		marginRight: 20,
	},
	todayLow: {
		fontSize: 16,
		color: "#fff",
		marginRight: 15,
	},
	hourViewContainer: {
		flexDirection: "row",
		marginBottom: 10,
		paddingBottom: 10,
		borderBottomWidth: Util.pixel,borderColor: "rgba(255,255,255,0.7)",
	},
	hourViewCell: {
		paddingLeft: 10,paddingRight: 10,
	},
	hourViewTime: {
		fontSize: 12,
		color: "#fff",
		textAlign: "center"
	},
	hourViewDegree: {
		fontSize: 14,
		color: "#fff",
		textAlign: "center"
	},
	hourViewIcon: {
		color: "#fff",
		marginTop: 10,marginBottom: 10,
		textAlign: "center"
	},
	dayViewContainer: {
		marginBottom: 10,
		paddingBottom: 10,
		borderBottomWidth: Util.pixel,borderColor: "rgba(255,255,255,0.7)",		
	},
	dayViewCell: {
		flexDirection: "row",
		marginBottom: 10,
		paddingLeft: 15, paddingRight: 15
	},
	dayViewDay: {
		flex: 1,
		justifyContent: "flex-start",
		fontSize: 15,
		color: "#fff"
	},
	dayViewIcon: {
		flex: 1,
		textAlign: "center",
		fontSize: 16,
		color: "#fff"
	},
	dayViewDegree: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "flex-end"
	},
	dayViewHigh: {
		flex: 1,
		textAlign: "right",
		fontSize: 15,
		color: "#fff",
		marginRight: -15
	},
	dayViewLow: {
		flex: 1,
		textAlign: "right",
		fontSize: 15,
		color: "#fff"
	},
	infoContainer: {
		marginBottom: 10,
		paddingBottom: 10,
		borderBottomWidth: Util.pixel,borderColor: "rgba(255,255,255,0.7)",	
	},
	info: {
		fontSize: 15,
		color: "#fff",
		textAlign: "center"
	},
	otherInfoContainer: {
		
	},
	otherInfoCell: {
		flexDirection: "row",
		marginBottom: 10
	},
	title: {
		flex: 1,
		fontSize: 15,
		color: "#fff",
		textAlign: "right"
	},
	value: {
		flex: 1,
		fontSize: 15,
		color: "#fff",
		marginLeft: 10
	},
})