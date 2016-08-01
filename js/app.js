var dataproject = {
	init: function(){
		//dataproject.share();
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = ""; //Tweet text
			var url = ""; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = ""; //Picture URL
			var title = ""; //Post title
			var description = ""; //Post description
			var url = ""; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	}
}
$(function () {
    $('#chart1').highcharts({
        title: {
            text: 'River Levels',
        },
        subtitle: {
            text: 'Source: US Geological Survey',
        },
        xAxis: {
            categories: ["2016-07-28 00:00 EST","2016-07-28 00:15 EST","2016-07-28 00:30 EST","2016-07-28 00:45 EST","2016-07-28 01:00 EST","2016-07-28 01:15 EST","2016-07-28 01:30 EST","2016-07-28 01:45 EST","2016-07-28 02:00 EST","2016-07-28 02:15 EST","2016-07-28 02:30 EST","2016-07-28 02:45 EST","2016-07-28 03:00 EST","2016-07-28 03:15 EST","2016-07-28 03:30 EST","2016-07-28 03:45 EST","2016-07-28 04:00 EST","2016-07-28 04:15 EST","2016-07-28 04:30 EST","2016-07-28 04:45 EST","2016-07-28 05:00 EST","2016-07-28 05:15 EST","2016-07-28 05:30 EST","2016-07-28 05:45 EST","2016-07-28 06:00 EST","2016-07-28 06:15 EST","2016-07-28 06:30 EST","2016-07-28 06:45 EST","2016-07-28 07:00 EST","2016-07-28 07:15 EST","2016-07-28 07:30 EST","2016-07-28 07:45 EST","2016-07-28 12:00 EST","2016-07-28 12:15 EST","2016-07-28 12:30 EST","2016-07-28 12:45 EST","2016-07-28 13:00 EST","2016-07-28 13:15 EST","2016-07-28 13:30 EST","2016-07-28 13:45 EST","2016-07-28 14:00 EST","2016-07-28 14:15 EST","2016-07-28 14:30 EST","2016-07-28 14:45 EST","2016-07-28 15:00 EST","2016-07-28 15:15 EST","2016-07-28 15:30 EST","2016-07-28 15:45 EST","2016-07-28 16:00 EST","2016-07-28 16:15 EST","2016-07-28 16:30 EST","2016-07-28 16:45 EST","2016-07-28 17:00 EST","2016-07-28 17:15 EST","2016-07-28 17:30 EST","2016-07-28 17:45 EST","2016-07-28 18:00 EST","2016-07-28 18:15 EST","2016-07-28 18:30 EST","2016-07-28 18:45 EST","2016-07-28 19:00 EST","2016-07-28 19:15 EST","2016-07-28 19:30 EST","2016-07-28 19:45 EST","2016-07-28 20:00 EST","2016-07-28 20:15 EST","2016-07-28 20:30 EST","2016-07-28 20:45 EST","2016-07-28 21:00 EST","2016-07-28 21:15 EST","2016-07-28 21:30 EST","2016-07-28 21:45 EST","2016-07-28 22:00 EST","2016-07-28 22:15 EST","2016-07-28 22:30 EST","2016-07-28 22:45 EST","2016-07-28 23:00 EST","2016-07-28 23:15 EST","2016-07-28 23:30 EST","2016-07-28 23:45 EST","2016-07-29 00:00 EST","2016-07-29 00:15 EST","2016-07-29 00:30 EST","2016-07-29 00:45 EST","2016-07-29 01:00 EST","2016-07-29 01:15 EST","2016-07-29 01:30 EST","2016-07-29 01:45 EST","2016-07-29 02:00 EST","2016-07-29 02:15 EST","2016-07-29 02:30 EST","2016-07-29 02:45 EST","2016-07-29 03:00 EST","2016-07-29 03:15 EST","2016-07-29 03:30 EST","2016-07-29 03:45 EST","2016-07-29 04:00 EST","2016-07-29 04:15 EST","2016-07-29 04:30 EST","2016-07-29 04:45 EST","2016-07-29 05:00 EST","2016-07-29 05:15 EST","2016-07-29 05:30 EST","2016-07-29 05:45 EST","2016-07-29 06:00 EST","2016-07-29 06:15 EST","2016-07-29 06:30 EST","2016-07-29 06:45 EST","2016-07-29 07:00 EST","2016-07-29 07:15 EST","2016-07-29 07:30 EST","2016-07-29 07:45 EST","2016-07-29 08:00 EST","2016-07-29 08:15 EST","2016-07-29 08:30 EST","2016-07-29 08:45 EST","2016-07-29 09:00 EST","2016-07-29 09:15 EST","2016-07-29 09:30 EST","2016-07-29 09:45 EST","2016-07-29 10:00 EST","2016-07-29 10:15 EST","2016-07-29 10:30 EST","2016-07-29 10:45 EST","2016-07-29 11:00 EST","2016-07-29 11:15 EST","2016-07-29 11:30 EST","2016-07-29 11:45 EST","2016-07-29 12:00 EST","2016-07-29 12:15 EST","2016-07-29 12:30 EST","2016-07-29 12:45 EST","2016-07-29 13:00 EST","2016-07-29 13:15 EST","2016-07-29 13:30 EST","2016-07-29 13:45 EST","2016-07-29 14:00 EST","2016-07-29 14:15 EST","2016-07-29 14:30 EST","2016-07-29 14:45 EST","2016-07-29 15:00 EST","2016-07-29 15:15 EST","2016-07-29 15:30 EST","2016-07-29 15:45 EST","2016-07-29 16:00 EST","2016-07-29 16:15 EST","2016-07-29 16:30 EST","2016-07-29 16:45 EST","2016-07-29 17:00 EST","2016-07-29 17:15 EST","2016-07-29 17:30 EST","2016-07-29 17:45 EST","2016-07-29 18:00 EST","2016-07-29 18:15 EST","2016-07-29 18:30 EST","2016-07-29 18:45 EST","2016-07-29 19:00 EST","2016-07-29 19:15 EST","2016-07-29 19:30 EST","2016-07-29 19:45 EST","2016-07-29 20:00 EST","2016-07-29 20:15 EST","2016-07-29 20:30 EST","2016-07-29 20:45 EST","2016-07-29 21:00 EST","2016-07-29 21:15 EST","2016-07-29 21:30 EST","2016-07-29 21:45 EST","2016-07-29 22:00 EST","2016-07-29 22:15 EST","2016-07-29 22:30 EST","2016-07-29 22:45 EST","2016-07-29 23:00 EST","2016-07-29 23:15 EST","2016-07-29 23:30 EST","2016-07-29 23:45 EST","2016-07-30 00:00 EST","2016-07-30 00:15 EST","2016-07-30 00:30 EST","2016-07-30 00:45 EST","2016-07-30 01:00 EST","2016-07-30 01:15 EST","2016-07-30 01:30 EST","2016-07-30 01:45 EST","2016-07-30 02:00 EST","2016-07-30 02:15 EST","2016-07-30 02:30 EST","2016-07-30 02:45 EST","2016-07-30 03:00 EST","2016-07-30 03:15 EST","2016-07-30 03:30 EST","2016-07-30 03:45 EST","2016-07-30 04:00 EST","2016-07-30 04:15 EST","2016-07-30 04:30 EST","2016-07-30 04:45 EST","2016-07-30 05:00 EST","2016-07-30 05:15 EST","2016-07-30 05:30 EST","2016-07-30 05:45 EST","2016-07-30 06:00 EST","2016-07-30 06:15 EST","2016-07-30 06:30 EST","2016-07-30 06:45 EST","2016-07-30 07:00 EST","2016-07-30 07:15 EST","2016-07-30 07:30 EST","2016-07-30 07:45 EST","2016-07-30 08:00 EST","2016-07-30 08:15 EST","2016-07-30 08:30 EST","2016-07-30 08:45 EST","2016-07-30 09:00 EST","2016-07-30 09:15 EST","2016-07-30 09:30 EST","2016-07-30 09:45 EST","2016-07-30 10:00 EST","2016-07-30 10:15 EST","2016-07-30 10:30 EST","2016-07-30 10:45 EST","2016-07-30 11:00 EST","2016-07-30 11:15 EST","2016-07-30 11:30 EST","2016-07-30 11:45 EST","2016-07-30 12:00 EST","2016-07-30 12:15 EST","2016-07-30 12:30 EST","2016-07-30 12:45 EST","2016-07-30 13:00 EST","2016-07-30 13:15 EST","2016-07-30 13:30 EST","2016-07-30 13:45 EST","2016-07-30 14:00 EST","2016-07-30 14:15 EST","2016-07-30 14:30 EST","2016-07-30 14:45 EST","2016-07-30 15:00 EST","2016-07-30 15:15 EST","2016-07-30 15:30 EST","2016-07-30 15:45 EST","2016-07-30 16:00 EST","2016-07-30 16:15 EST","2016-07-30 16:30 EST","2016-07-30 16:45 EST","2016-07-30 17:00 EST","2016-07-30 17:15 EST","2016-07-30 17:30 EST","2016-07-30 17:45 EST","2016-07-30 18:00 EST","2016-07-30 18:15 EST","2016-07-30 18:30 EST","2016-07-30 18:45 EST","2016-07-30 19:00 EST","2016-07-30 19:15 EST","2016-07-30 19:30 EST","2016-07-30 20:00 EST","2016-07-30 20:15 EST","2016-07-30 20:30 EST","2016-07-30 20:45 EST","2016-07-30 21:00 EST","2016-07-30 21:30 EST","2016-07-30 21:45 EST","2016-07-30 22:00 EST","2016-07-30 22:15 EST","2016-07-30 22:30 EST","2016-07-30 22:45 EST","2016-07-30 23:00 EST","2016-07-30 23:15 EST","2016-07-30 23:30 EST","2016-07-30 23:45 EST","2016-07-31 00:00 EST","2016-07-31 00:15 EST","2016-07-31 00:30 EST","2016-07-31 00:45 EST","2016-07-31 01:00 EST","2016-07-31 01:15 EST","2016-07-31 01:30 EST","2016-07-31 01:45 EST","2016-07-31 02:00 EST","2016-07-31 02:15 EST","2016-07-31 02:30 EST","2016-07-31 02:45 EST","2016-07-31 03:00 EST","2016-07-31 03:15 EST","2016-07-31 03:30 EST","2016-07-31 03:45 EST","2016-07-31 04:00 EST","2016-07-31 04:15 EST","2016-07-31 04:30 EST","2016-07-31 04:45 EST","2016-07-31 05:00 EST","2016-07-31 05:15 EST","2016-07-31 05:30 EST","2016-07-31 05:45 EST","2016-07-31 06:00 EST","2016-07-31 06:15 EST","2016-07-31 06:30 EST","2016-07-31 06:45 EST","2016-07-31 07:00 EST","2016-07-31 07:15 EST","2016-07-31 07:30 EST","2016-07-31 07:45 EST","2016-07-31 08:00 EST","2016-07-31 08:15 EST","2016-07-31 08:30 EST","2016-07-31 08:45 EST","2016-07-31 09:00 EST","2016-07-31 09:15 EST","2016-07-31 09:30 EST","2016-07-31 09:45 EST","2016-07-31 10:00 EST","2016-07-31 10:15 EST","2016-07-31 10:30 EST","2016-07-31 10:45 EST","2016-07-31 11:00 EST","2016-07-31 11:15 EST","2016-07-31 11:30 EST","2016-07-31 11:45 EST","2016-07-31 12:00 EST","2016-07-31 12:15 EST","2016-07-31 12:30 EST","2016-07-31 12:45 EST","2016-07-31 13:00 EST","2016-07-31 13:15 EST","2016-07-31 13:30 EST","2016-07-31 13:45 EST","2016-07-31 14:00 EST","2016-07-31 14:15 EST","2016-07-31 14:30 EST","2016-07-31 14:45 EST","2016-07-31 15:00 EST","2016-07-31 15:15 EST","2016-07-31 15:30 EST","2016-07-31 15:45 EST","2016-07-31 16:00 EST","2016-07-31 16:15 EST","2016-07-31 16:30 EST","2016-07-31 16:45 EST","2016-07-31 17:00 EST","2016-07-31 17:15 EST","2016-07-31 17:30 EST","2016-07-31 17:45 EST","2016-07-31 18:00 EST","2016-07-31 18:15 EST","2016-07-31 18:30 EST","2016-07-31 18:45 EST","2016-07-31 19:00 EST","2016-07-31 19:15 EST","2016-07-31 19:30 EST","2016-07-31 19:45 EST","2016-07-31 20:00 EST","2016-07-31 20:15 EST","2016-07-31 20:30 EST","2016-07-31 20:45 EST","2016-07-31 21:00 EST","2016-07-31 21:15 EST","2016-07-31 21:30 EST","2016-07-31 21:45 EST","2016-07-31 22:00 EST","2016-07-31 22:15 EST","2016-07-31 22:30 EST","2016-07-31 22:45 EST","2016-07-31 23:00 EST","2016-07-31 23:15 EST","2016-07-31 23:30 EST","2016-07-31 23:45 EST","2016-08-01 00:00 EST","2016-08-01 00:15 EST","2016-08-01 00:30 EST","2016-08-01 00:45 EST","2016-08-01 01:00 EST","2016-08-01 01:15 EST","2016-08-01 01:30 EST","2016-08-01 01:45 EST","2016-08-01 02:00 EST","2016-08-01 02:15 EST","2016-08-01 02:30 EST","2016-08-01 02:45 EST","2016-08-01 03:00 EST","2016-08-01 03:15 EST","2016-08-01 03:30 EST","2016-08-01 03:45 EST","2016-08-01 04:00 EST","2016-08-01 04:15 EST","2016-08-01 04:30 EST","2016-08-01 04:45 EST","2016-08-01 05:00 EST","2016-08-01 05:15 EST","2016-08-01 05:30 EST","2016-08-01 05:45 EST","2016-08-01 06:00 EST","2016-08-01 06:15 EST","2016-08-01 06:30 EST","2016-08-01 06:45 EST","2016-08-01 07:00 EST","2016-08-01 07:15 EST","2016-08-01 07:30 EST","2016-08-01 07:45 EST","2016-08-01 08:00 EST","2016-08-01 08:15 EST","2016-08-01 08:30 EST","2016-08-01 08:45 EST","2016-08-01 09:00 EST","2016-08-01 09:15 EST","2016-08-01 09:30 EST"]
        },
        yAxis: {
            title: {
                text: 'Gage Height (Ft.)'
            }
        },
        tooltip: {
            valueSuffix: ' ft.'
        },
        series: [{
            name: 'Gage Height',
            data: [10.25,10.25,10.25,10.25,10.25,10.25,10.25,10.24,10.24,10.24,10.24,10.24,10.24,10.24,10.24,10.24,10.25,10.24,10.24,10.25,10.24,10.24,10.25,10.25,10.25,10.25,10.25,10.25,10.25,10.25,10.25,10.25,10.24,10.24,10.24,10.24,10.24,10.24,10.24,10.24,10.24,10.24,10.24,10.26,10.29,10.29,10.33,10.35,10.75,10.87,11.19,11.46,11.49,11.40,11.32,11.36,11.42,11.37,11.30,11.21,11.12,11.05,10.98,10.93,10.87,10.83,10.79,10.76,10.74,10.72,10.71,10.73,10.80,10.83,10.86,10.92,10.97,10.98,10.98,10.99,10.99,11.00,10.99,10.96,10.94,10.92,10.90,10.88,10.86,10.84,10.83,10.82,10.81,10.80,10.86,10.91,11.62,12.33,12.65,12.46,12.24,12.31,12.30,12.13,11.96,11.81,11.69,11.59,11.52,11.51,11.53,11.54,11.52,11.50,11.48,11.46,11.45,11.45,11.46,11.46,11.45,11.44,11.43,11.42,11.40,11.38,11.36,11.36,11.34,11.33,11.33,11.33,11.33,11.33,11.34,11.33,11.33,11.33,11.32,11.31,11.29,11.29,11.28,11.26,11.25,11.24,11.23,11.22,11.21,11.20,11.20,11.20,11.20,11.19,11.19,11.18,11.18,11.17,11.16,11.16,11.15,11.14,11.13,11.11,11.10,11.09,11.08,11.06,11.05,11.04,11.03,11.01,11.01,10.99,10.98,10.97,10.96,10.95,10.94,10.93,10.92,10.91,10.90,10.89,10.88,10.87,10.86,10.85,10.84,10.83,10.82,10.81,10.81,10.80,10.79,10.78,10.77,10.77,10.76,10.75,10.74,10.74,10.73,10.72,10.72,10.71,10.70,10.70,10.69,10.69,10.68,10.67,10.67,10.66,10.66,10.65,10.65,10.64,10.64,10.63,10.63,10.62,10.62,10.61,10.61,10.60,10.60,10.59,10.59,10.59,10.58,10.58,10.57,10.57,10.56,10.56,10.55,10.55,10.54,10.55,10.54,10.54,10.54,10.54,10.52,10.54,10.55,10.55,10.56,10.62,10.66,11.01,12.44,16.52,21.15,26.30,27.14,26.69,26.33,25.65,24.54,23.94,23.25,22.68,21.78,20.94,20.09,19.31,18.59,17.93,17.33,16.86,16.43,16.09,15.75,15.51,15.28,15.10,14.94,14.79,14.68,14.60,14.48,14.38,14.27,14.19,14.08,13.98,13.87,13.78,13.68,13.61,13.52,13.43,13.35,13.26,13.20,13.13,13.04,12.99,12.92,12.85,12.80,12.74,12.68,12.62,12.57,12.53,12.50,12.44,12.40,12.36,12.34,12.31,12.27,12.24,12.21,12.18,12.15,12.13,12.10,12.08,12.06,12.03,12.01,11.99,11.97,11.95,11.93,11.91,11.89,11.87,11.86,11.84,11.83,11.81,11.80,11.79,11.77,11.76,11.75,11.74,11.73,11.72,11.71,11.70,11.69,11.68,11.67,11.66,11.65,11.64,11.64,11.63,11.62,11.62,11.61,11.60,11.59,11.59,11.58,11.57,11.56,11.56,11.55,11.54,11.54,11.53,11.52,11.51,11.51,11.50,11.50,11.49,11.49,11.48,11.47,11.47,11.46,11.46,11.45,11.44,11.44,11.43,11.43,11.42,11.42,11.41,11.41,11.41,11.40,11.41,11.40,11.40,11.39,11.38,11.38,11.38,11.37,11.37,11.37,11.36,11.36,11.35,11.35]
        }]
    });
});

$(function () {
    $('#chart2').highcharts({
        title: {
            text: 'River Discharge',
        },
        subtitle: {
            text: 'Source: US Geological Survey',
        },
        xAxis: {
            categories: ["2016-07-28 00:00 EST","2016-07-28 00:15 EST","2016-07-28 00:30 EST","2016-07-28 00:45 EST","2016-07-28 01:00 EST","2016-07-28 01:15 EST","2016-07-28 01:30 EST","2016-07-28 01:45 EST","2016-07-28 02:00 EST","2016-07-28 02:15 EST","2016-07-28 02:30 EST","2016-07-28 02:45 EST","2016-07-28 03:00 EST","2016-07-28 03:15 EST","2016-07-28 03:30 EST","2016-07-28 03:45 EST","2016-07-28 04:00 EST","2016-07-28 04:15 EST","2016-07-28 04:30 EST","2016-07-28 04:45 EST","2016-07-28 05:00 EST","2016-07-28 05:15 EST","2016-07-28 05:30 EST","2016-07-28 05:45 EST","2016-07-28 06:00 EST","2016-07-28 06:15 EST","2016-07-28 06:30 EST","2016-07-28 06:45 EST","2016-07-28 07:00 EST","2016-07-28 07:15 EST","2016-07-28 07:30 EST","2016-07-28 07:45 EST","2016-07-28 12:00 EST","2016-07-28 12:15 EST","2016-07-28 12:30 EST","2016-07-28 12:45 EST","2016-07-28 13:00 EST","2016-07-28 13:15 EST","2016-07-28 13:30 EST","2016-07-28 13:45 EST","2016-07-28 14:00 EST","2016-07-28 14:15 EST","2016-07-28 14:30 EST","2016-07-28 14:45 EST","2016-07-28 15:00 EST","2016-07-28 15:15 EST","2016-07-28 15:30 EST","2016-07-28 15:45 EST","2016-07-28 16:00 EST","2016-07-28 16:15 EST","2016-07-28 16:30 EST","2016-07-28 16:45 EST","2016-07-28 17:00 EST","2016-07-28 17:15 EST","2016-07-28 17:30 EST","2016-07-28 17:45 EST","2016-07-28 18:00 EST","2016-07-28 18:15 EST","2016-07-28 18:30 EST","2016-07-28 18:45 EST","2016-07-28 19:00 EST","2016-07-28 19:15 EST","2016-07-28 19:30 EST","2016-07-28 19:45 EST","2016-07-28 20:00 EST","2016-07-28 20:15 EST","2016-07-28 20:30 EST","2016-07-28 20:45 EST","2016-07-28 21:00 EST","2016-07-28 21:15 EST","2016-07-28 21:30 EST","2016-07-28 21:45 EST","2016-07-28 22:00 EST","2016-07-28 22:15 EST","2016-07-28 22:30 EST","2016-07-28 22:45 EST","2016-07-28 23:00 EST","2016-07-28 23:15 EST","2016-07-28 23:30 EST","2016-07-28 23:45 EST","2016-07-29 00:00 EST","2016-07-29 00:15 EST","2016-07-29 00:30 EST","2016-07-29 00:45 EST","2016-07-29 01:00 EST","2016-07-29 01:15 EST","2016-07-29 01:30 EST","2016-07-29 01:45 EST","2016-07-29 02:00 EST","2016-07-29 02:15 EST","2016-07-29 02:30 EST","2016-07-29 02:45 EST","2016-07-29 03:00 EST","2016-07-29 03:15 EST","2016-07-29 03:30 EST","2016-07-29 03:45 EST","2016-07-29 04:00 EST","2016-07-29 04:15 EST","2016-07-29 04:30 EST","2016-07-29 04:45 EST","2016-07-29 05:00 EST","2016-07-29 05:15 EST","2016-07-29 05:30 EST","2016-07-29 05:45 EST","2016-07-29 06:00 EST","2016-07-29 06:15 EST","2016-07-29 06:30 EST","2016-07-29 06:45 EST","2016-07-29 07:00 EST","2016-07-29 07:15 EST","2016-07-29 07:30 EST","2016-07-29 07:45 EST","2016-07-29 08:00 EST","2016-07-29 08:15 EST","2016-07-29 08:30 EST","2016-07-29 08:45 EST","2016-07-29 09:00 EST","2016-07-29 09:15 EST","2016-07-29 09:30 EST","2016-07-29 09:45 EST","2016-07-29 10:00 EST","2016-07-29 10:15 EST","2016-07-29 10:30 EST","2016-07-29 10:45 EST","2016-07-29 11:00 EST","2016-07-29 11:15 EST","2016-07-29 11:30 EST","2016-07-29 11:45 EST","2016-07-29 12:00 EST","2016-07-29 12:15 EST","2016-07-29 12:30 EST","2016-07-29 12:45 EST","2016-07-29 13:00 EST","2016-07-29 13:15 EST","2016-07-29 13:30 EST","2016-07-29 13:45 EST","2016-07-29 14:00 EST","2016-07-29 14:15 EST","2016-07-29 14:30 EST","2016-07-29 14:45 EST","2016-07-29 15:00 EST","2016-07-29 15:15 EST","2016-07-29 15:30 EST","2016-07-29 15:45 EST","2016-07-29 16:00 EST","2016-07-29 16:15 EST","2016-07-29 16:30 EST","2016-07-29 16:45 EST","2016-07-29 17:00 EST","2016-07-29 17:15 EST","2016-07-29 17:30 EST","2016-07-29 17:45 EST","2016-07-29 18:00 EST","2016-07-29 18:15 EST","2016-07-29 18:30 EST","2016-07-29 18:45 EST","2016-07-29 19:00 EST","2016-07-29 19:15 EST","2016-07-29 19:30 EST","2016-07-29 19:45 EST","2016-07-29 20:00 EST","2016-07-29 20:15 EST","2016-07-29 20:30 EST","2016-07-29 20:45 EST","2016-07-29 21:00 EST","2016-07-29 21:15 EST","2016-07-29 21:30 EST","2016-07-29 21:45 EST","2016-07-29 22:00 EST","2016-07-29 22:15 EST","2016-07-29 22:30 EST","2016-07-29 22:45 EST","2016-07-29 23:00 EST","2016-07-29 23:15 EST","2016-07-29 23:30 EST","2016-07-29 23:45 EST","2016-07-30 00:00 EST","2016-07-30 00:15 EST","2016-07-30 00:30 EST","2016-07-30 00:45 EST","2016-07-30 01:00 EST","2016-07-30 01:15 EST","2016-07-30 01:30 EST","2016-07-30 01:45 EST","2016-07-30 02:00 EST","2016-07-30 02:15 EST","2016-07-30 02:30 EST","2016-07-30 02:45 EST","2016-07-30 03:00 EST","2016-07-30 03:15 EST","2016-07-30 03:30 EST","2016-07-30 03:45 EST","2016-07-30 04:00 EST","2016-07-30 04:15 EST","2016-07-30 04:30 EST","2016-07-30 04:45 EST","2016-07-30 05:00 EST","2016-07-30 05:15 EST","2016-07-30 05:30 EST","2016-07-30 05:45 EST","2016-07-30 06:00 EST","2016-07-30 06:15 EST","2016-07-30 06:30 EST","2016-07-30 06:45 EST","2016-07-30 07:00 EST","2016-07-30 07:15 EST","2016-07-30 07:30 EST","2016-07-30 07:45 EST","2016-07-30 08:00 EST","2016-07-30 08:15 EST","2016-07-30 08:30 EST","2016-07-30 08:45 EST","2016-07-30 09:00 EST","2016-07-30 09:15 EST","2016-07-30 09:30 EST","2016-07-30 09:45 EST","2016-07-30 10:00 EST","2016-07-30 10:15 EST","2016-07-30 10:30 EST","2016-07-30 10:45 EST","2016-07-30 11:00 EST","2016-07-30 11:15 EST","2016-07-30 11:30 EST","2016-07-30 11:45 EST","2016-07-30 12:00 EST","2016-07-30 12:15 EST","2016-07-30 12:30 EST","2016-07-30 12:45 EST","2016-07-30 13:00 EST","2016-07-30 13:15 EST","2016-07-30 13:30 EST","2016-07-30 13:45 EST","2016-07-30 14:00 EST","2016-07-30 14:15 EST","2016-07-30 14:30 EST","2016-07-30 14:45 EST","2016-07-30 15:00 EST","2016-07-30 15:15 EST","2016-07-30 15:30 EST","2016-07-30 15:45 EST","2016-07-30 16:00 EST","2016-07-30 16:15 EST","2016-07-30 16:30 EST","2016-07-30 16:45 EST","2016-07-30 17:00 EST","2016-07-30 17:15 EST","2016-07-30 17:30 EST","2016-07-30 17:45 EST","2016-07-30 18:00 EST","2016-07-30 18:15 EST","2016-07-30 18:30 EST","2016-07-30 18:45 EST","2016-07-30 19:00 EST","2016-07-30 19:15 EST","2016-07-30 19:30 EST","2016-07-30 20:00 EST","2016-07-30 20:15 EST","2016-07-30 20:30 EST","2016-07-30 20:45 EST","2016-07-30 21:00 EST","2016-07-30 21:30 EST","2016-07-30 21:45 EST","2016-07-30 22:00 EST","2016-07-30 22:15 EST","2016-07-30 22:30 EST","2016-07-30 22:45 EST","2016-07-30 23:00 EST","2016-07-30 23:15 EST","2016-07-30 23:30 EST","2016-07-30 23:45 EST","2016-07-31 00:00 EST","2016-07-31 00:15 EST","2016-07-31 00:30 EST","2016-07-31 00:45 EST","2016-07-31 01:00 EST","2016-07-31 01:15 EST","2016-07-31 01:30 EST","2016-07-31 01:45 EST","2016-07-31 02:00 EST","2016-07-31 02:15 EST","2016-07-31 02:30 EST","2016-07-31 02:45 EST","2016-07-31 03:00 EST","2016-07-31 03:15 EST","2016-07-31 03:30 EST","2016-07-31 03:45 EST","2016-07-31 04:00 EST","2016-07-31 04:15 EST","2016-07-31 04:30 EST","2016-07-31 04:45 EST","2016-07-31 05:00 EST","2016-07-31 05:15 EST","2016-07-31 05:30 EST","2016-07-31 05:45 EST","2016-07-31 06:00 EST","2016-07-31 06:15 EST","2016-07-31 06:30 EST","2016-07-31 06:45 EST","2016-07-31 07:00 EST","2016-07-31 07:15 EST","2016-07-31 07:30 EST","2016-07-31 07:45 EST","2016-07-31 08:00 EST","2016-07-31 08:15 EST","2016-07-31 08:30 EST","2016-07-31 08:45 EST","2016-07-31 09:00 EST","2016-07-31 09:15 EST","2016-07-31 09:30 EST","2016-07-31 09:45 EST","2016-07-31 10:00 EST","2016-07-31 10:15 EST","2016-07-31 10:30 EST","2016-07-31 10:45 EST","2016-07-31 11:00 EST","2016-07-31 11:15 EST","2016-07-31 11:30 EST","2016-07-31 11:45 EST","2016-07-31 12:00 EST","2016-07-31 12:15 EST","2016-07-31 12:30 EST","2016-07-31 12:45 EST","2016-07-31 13:00 EST","2016-07-31 13:15 EST","2016-07-31 13:30 EST","2016-07-31 13:45 EST","2016-07-31 14:00 EST","2016-07-31 14:15 EST","2016-07-31 14:30 EST","2016-07-31 14:45 EST","2016-07-31 15:00 EST","2016-07-31 15:15 EST","2016-07-31 15:30 EST","2016-07-31 15:45 EST","2016-07-31 16:00 EST","2016-07-31 16:15 EST","2016-07-31 16:30 EST","2016-07-31 16:45 EST","2016-07-31 17:00 EST","2016-07-31 17:15 EST","2016-07-31 17:30 EST","2016-07-31 17:45 EST","2016-07-31 18:00 EST","2016-07-31 18:15 EST","2016-07-31 18:30 EST","2016-07-31 18:45 EST","2016-07-31 19:00 EST","2016-07-31 19:15 EST","2016-07-31 19:30 EST","2016-07-31 19:45 EST","2016-07-31 20:00 EST","2016-07-31 20:15 EST","2016-07-31 20:30 EST","2016-07-31 20:45 EST","2016-07-31 21:00 EST","2016-07-31 21:15 EST","2016-07-31 21:30 EST","2016-07-31 21:45 EST","2016-07-31 22:00 EST","2016-07-31 22:15 EST","2016-07-31 22:30 EST","2016-07-31 22:45 EST","2016-07-31 23:00 EST","2016-07-31 23:15 EST","2016-07-31 23:30 EST","2016-07-31 23:45 EST","2016-08-01 00:00 EST","2016-08-01 00:15 EST","2016-08-01 00:30 EST","2016-08-01 00:45 EST","2016-08-01 01:00 EST","2016-08-01 01:15 EST","2016-08-01 01:30 EST","2016-08-01 01:45 EST","2016-08-01 02:00 EST","2016-08-01 02:15 EST","2016-08-01 02:30 EST","2016-08-01 02:45 EST","2016-08-01 03:00 EST","2016-08-01 03:15 EST","2016-08-01 03:30 EST","2016-08-01 03:45 EST","2016-08-01 04:00 EST","2016-08-01 04:15 EST","2016-08-01 04:30 EST","2016-08-01 04:45 EST","2016-08-01 05:00 EST","2016-08-01 05:15 EST","2016-08-01 05:30 EST","2016-08-01 05:45 EST","2016-08-01 06:00 EST","2016-08-01 06:15 EST","2016-08-01 06:30 EST","2016-08-01 06:45 EST","2016-08-01 07:00 EST","2016-08-01 07:15 EST","2016-08-01 07:30 EST","2016-08-01 07:45 EST","2016-08-01 08:00 EST","2016-08-01 08:15 EST","2016-08-01 08:30 EST","2016-08-01 08:45 EST","2016-08-01 09:00 EST","2016-08-01 09:15 EST","2016-08-01 09:30 EST"]
        },
        yAxis: {
            title: {
                text: 'Discharge (Ft3/s)'
            }
        },
        tooltip: {
            valueSuffix: ' ft3/s'
        },
        series: [{
            name: 'Discharge',
            data: [52,52,52,52,52,52,52,51,51,51,51,51,51,51,51,51,52,51,51,52,51,51,52,52,52,52,52,52,52,52,52,52,51,51,51,51,51,51,51,51,51,51,51,53,55,55,59,61,115,136,208,289,300,269,244,256,276,259,237,214,190,174,158,147,136,128,123,117,113,110,108,112,123,128,134,147,155,158,158,160,160,162,160,153,149,147,142,138,134,130,128,126,124,123,134,144,344,648,814,713,606,639,634,556,484,423,372,333,311,307,314,318,311,303,296,289,286,286,289,289,286,283,279,276,269,263,256,256,250,247,247,247,247,247,250,247,247,247,244,241,234,234,231,229,226,223,220,217,214,211,211,211,211,208,208,206,206,203,200,200,198,195,192,187,184,182,179,174,174,172,169,165,165,160,158,155,153,151,149,147,147,144,142,140,138,136,134,132,130,128,126,124,124,123,123,121,119,119,117,115,113,113,112,110,110,108,106,106,105,105,103,101,101,101,101,100,100,98,98,96,96,95,95,93,93,92,92,90,90,90,88,88,87,87,85,85,84,84,82,84,82,82,82,82,80,82,84,84,85,95,101,165,703,4410,14400,26600,28500,27500,26700,25300,23000,21700,20100,18600,16300,13900,11700,9710,8070,6740,5650,4890,4290,3840,3420,3140,2890,2700,2530,2390,2280,2210,2100,2010,1920,1850,1760,1680,1600,1530,1460,1410,1340,1280,1230,1170,1130,1090,1040,1010,967,928,900,865,831,798,771,749,734,703,683,663,653,639,620,606,592,578,565,556,543,534,526,513,505,496,488,480,472,464,455,446,441,437,432,423,419,415,406,402,397,393,389,385,380,376,372,368,364,360,356,352,352,348,344,344,341,337,333,333,329,325,322,322,322,318,318,314,311,307,307,303,303,300,300,296,293,293,289,289,286,283,283,279,279,276,276,272,272,272,269,272,269,269,266,263,263,263,259,259,259,256,256,253,253]
            }]
    });
});
$(document).ready(function(){
	dataproject.init();
	console.log("connected");
});
