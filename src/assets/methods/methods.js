export default{
    methodContent: {
        methods:[
            {
                'title': 'Digitization of historic urban extents',
                'method': 'Historic urban extents were digitized using an ArcToolbox<sup>*</sup> tool, "PDF to TIFF Conversion Tool". ' +
                        'Each separate page of the provided PDF was converted into a geotiff format "TIF file" that was ' +
                        'imported as a raster layer into ArcMap 10.7. After adding the TIF file into the current GIS project, ' +
                        'the Georeferencing tool "Fit to Display" was used to pull the raster into the area of interest. ' +
                        'Control points were identified and laid down to tie the non-geospatial TIF image to actual ' +
                        'locations on the ground using the Georeferencing tool "Add Control Points". This stretched the ' +
                        'raster into the current GIS projection, which is set at EPSG:3857. After successfully aligning ' +
                        'the TIF to the geospatial extent of interest, a new empty shapefile was created. The Create ' +
                        'Features toolset was used to manually trace polygons over the urban areas depicted in the ' +
                        'original PDF. <br><br><sup>*</sup><i>Any use of trade, firm, or product names is for descriptive purposes only and does not imply endorsement by the U.S. Government</i>'
            },
            {
                'title': 'Calculating USGS stream gages',
                'method': 'To calculate the annual number of active USGS stream gages, an inventory of the USGS National Water Information System was completed using an <a href="https://github.com/USGS-R/national-flow-observations" target="_blank">R-based reproducible data pipeline called national-flow-observations</a>. For the purposes of this visualization, "active" gages are considered those with at least 335 days of data every year. Early gages with only monthly records were counted as active.'
            },
            {
                'title': 'Determining if a gage is urban or non-urban',
                'method': '<strong>Slider map</strong><br>' +
                        'To determine whether a stream gage is in an urban or rural area, we used urban extent spatial ' +
                        'data from the U.S. Census Bureau for years closest to our years of interest (1967 and 2018). ' +
                        'For the spatial extents used in the 1967 visual, we digitized maps from the <a href="https://www2.census.gov/library/publications/decennial/1970/pc-s1-supplementary-reports/pc-s1-108ch2.pdf" target="_blank">' +
                        '1970 US Census Bureau report on urbanized areas in the United States</a>. For the spatial extents ' +
                        'used in the 2018 visual, we used <a href="https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html" target="_blank">cartographic boundary files for 2018 urban areas from the ' +
                        'U.S. Census Bureau</a>. Using the urban extent spatial data and the USGS stream gage location ' +
                        'data, we used point-in-polygon methods in R to determine if a stream gage was inside or ' +
                        'outside of an urbanized area. Those methods can be found in <a href="https://github.com/usgs-makerspace/gages-through-the-ages/tree/master/data_processing_pipeline">this data processing pipeline</a>.<br>'  +
                        '<br><strong>National statistic</strong><br>' +
                        'To calculate the 2018 national percent of urban gages (23%), we used the full <a href="https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html" target="_blank">cartographic ' +
                        'boundary file from the US Census Bureau</a>. To calculate the 1967 national percent of urban ' +
                        'gages (16%), we did not digitize every urban area in the country. Instead, we used the ' +
                        'urban areas from 2018 to get an estimate. It is conservative because there are more urban ' +
                        'areas in 2018 than in 1967, so we know we are over estimating the number of gages that ' +
                        'count as urban in 1967.'
            }
        ]
    }
}
