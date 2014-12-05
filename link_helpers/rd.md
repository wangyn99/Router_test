URL: 统一资源定位符（Uniform Resource Locator）
完整的URL由这几个部分构成：scheme://host:port/path?query#fragment

scheme: 通信协议
    常用的http,ftp,matio等

host: 主机
    服务器（计算机）域名系统（DNS）主机名或IP地址。

port: 端口号
    整数，可选，省略时使用方案的默认端口，如http的默认端口为80

path: 路径
    由零或多个“/“符号隔开的字符串，一般用来表示主机上的一个目录或文件地址。

query: 查询
    可选，用于给动态网页（如使用CGI，ISAPI，PHP/JSP/ASP.NET等技术制作的网页）传递参数，可有多个参数，用"&"符号隔开，每个参数的名和值用”=“符号隔开。

fragment: 信息片段
    字符串，用于指定网络资源中的片段。例如一个网页中有多个名词解释，可使用fragment直接定位到某一名词解释。（也称为锚点）
    
    例如： http://www.maidq.com/index.html?ver=1.0&id=6#imhere