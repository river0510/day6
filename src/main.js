/**
 * Day 8
 * Swipe left
 */
'use strict';

import React,{ Component } from 'react';
import { Image,StyleSheet,StatusBar,Text,TouchableHighlight,PanResponder,LayoutAnimation,ScrollView,View } from 'react-native';
import Util from './utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import Day2 from './day2'

class Menu extends Component{
  render(){
    return(
      <View style={styles.sideMenuContainer}>
        <View style={styles.sideMenuHead}>
          <Image style={styles.headIcon} source={require('./img/22728808.jpeg')}></Image>
          <Text style={styles.name}>Huang</Text>
          <Text style={styles.account}>huanghe@gmail...</Text>
        </View>
        <View style={styles.menuBtnContainer}>
          <TouchableHighlight onPress={()=>true} underlayColor="#eee" style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.btn}>
              <Icon name="map-marker" size={12} style={styles.btnIcon}></Icon>
              <Text style={styles.btnText}>我的位置</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>true} underlayColor="#eee" style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.btn}>
              <Icon name="user-circle" size={12} style={styles.btnIcon}></Icon>
              <Text style={styles.btnText}>我的信息</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>true} underlayColor="#eee" style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.btn}>
              <Icon name="thermometer-0" size={12} style={styles.btnIcon}></Icon>
              <Text style={styles.btnText}>室内温度</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>true} underlayColor="#eee" style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.btn}>
              <Icon name="snowflake-o" size={12} style={styles.btnIcon}></Icon>
              <Text style={styles.btnText}>暴雪预警</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.menuBtnContainer}>
          <TouchableHighlight onPress={()=>true} underlayColor="#eee" style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.btn}>
              <Icon name="envelope-open-o" size={12} style={styles.btnIcon}></Icon>
              <Text style={styles.btnText}>我的消息</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>true} underlayColor="#eee" style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.btn}>
              <Icon name="automobile" size={12} style={styles.btnIcon}></Icon>
              <Text style={styles.btnText}>出行状况</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>true} underlayColor="#eee" style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.btn}>
              <Icon name="thumbs-o-up" size={12} style={styles.btnIcon}></Icon>
              <Text style={styles.btnText}>评价我们</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>true} underlayColor="#eee" style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.btn}>
              <Icon name="cog" size={12} style={styles.btnIcon}></Icon>
              <Text style={styles.btnText}>设置</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  } 
}

export default class extends Component{
  state = {
    maskShow: false,
    left: - 0.7 * Util.size.width - 10,
    opacity: 0,
    previousLeft: - 0.7 * Util.size.width - 10,
    previousOpacity: 0
  }

  _minLeft = - 0.7 * Util.size.width - 10
  _CustomLayoutLinear = LayoutAnimation.Presets.linear
  
  _endMove = (e,gestureState)=>{
    let left,opacity,previousLeft,previousOpacity,maskShow;
    if(gestureState.dx > 0 || gestureState.vx > 0){
      left = 0;
      opacity = 1;
      previousLeft = 0;
      previousOpacity = 1;
      maskShow = true;
    }else if(gestureState.dx < 0 || gestureState.vx < 0){
      left = this._minLeft;
      opacity = 0;
      previousLeft = this._minLeft;
      previousOpacity = 0;
      maskShow = false;
    }
    LayoutAnimation.configureNext(this._CustomLayoutLinear);
    this.setState({
      left: left,
      opacity: opacity,
      previousLeft: previousLeft,
      previousOpacity: previousOpacity,
      maskShow: maskShow
    })    
  }

  componentWillMount(){
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState)=>true,
      onMoveShouldSetPanResponder: (e,gestureState)=>{
        return gestureState.dy/gestureState.dx != 0
      },
      onPanResponderGrant: (e,gestureState)=>{
        this.setState({
          maskShow: true
        })
      },
      onPanResponderMove: (e,gestureState)=>{
        let left, opacity;
        left = this.state.previousLeft + gestureState.dx;
        opacity = this.state.previousOpacity + (gestureState.dx/(-this._minLeft));
        left = left > 0 ? 0 : left;
        left = left < this._minLeft ? this._minLeft : left;
        opacity = opacity > 1 ? 1 : opacity;
        opacity = opacity < 0 ? 0 : opacity;
        LayoutAnimation.configureNext(this._CustomLayoutLinear);
        this.setState({
          left: left,
          opacity: opacity
        })
      },
      onPanResponderTerminationRequest: (e,gestureState)=>true,
      onPanResponderRelease: (e,gestureState)=>this._endMove(e, gestureState),
      onPanResponderTerminate: (e,gestureState)=>this._endMove(e,gestureState)
    })
  }

  render(){
    let mask = this.state.maskShow ? <View style={[styles.mask,{opacity: this.state.opacity}]}></View> : <View></View>
    return(
      <View>       
        <Day2/>
        {mask}
        <View style={[styles.sideMenu, {left: this.state.left}]} {...this._panResponder.panHandlers}>
          <Menu></Menu> 
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sideMenu: {
    position: "absolute",
    width: 0.7 * Util.size.width + 20,
    height: Util.size.height,
  },
  sideMenuContainer:{
    position: "absolute",
    width: 0.7 * Util.size.width,
    height: Util.size.height,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 2
    },
    shadowOpacity: 0.3,
    backgroundColor: "transparent"
  },
  sideMenuHead: {
    height: 180,
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingTop: 30,paddingLeft: 15,paddingBottom: 10,
    // borderWidth:1,borderColor: "red",
  },
  sideMenuFooter: {
    height: 30,
    backgroundColor: "#fff"
  },
  headIcon: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    marginTop: 20
  },
  account: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5
  },
  menuBtnContainer: {
    flex: 1,
    borderBottomWidth: Util.pixel,borderColor: "#ddd",
    backgroundColor: "#fff"
  },
  btn: {
    flexDirection: "row",
  },
  btnIcon: {
    flex: 1,
    textAlign: "center",
    color: "#555"
  },
  btnText: {
    flex: 2,
    paddingLeft: 40,
    fontWeight: "500",
    color: "#555"
  },
  mask: {
    width: Util.size.width,
    height: Util.size.height,
    backgroundColor: "rgba(0,0,0,0.7)",
    position: "absolute"
  }

})